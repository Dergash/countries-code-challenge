import React, {FunctionComponent} from 'react'
import {Link} from 'react-router-dom';
import {CountryRecord, LanguageRecord} from '../interfaces/countries'
import styled from 'styled-components'
import Table from './Table'

interface CountryCardProps {
    country: CountryRecord
}

const Card = styled(Link)`
    background-color: rgb(15, 32, 45);
    padding: 16px;
    color: inherit;
    text-decoration: none;

    &:hover {
        background-color: rgb(20, 37, 50);
    }
`;

const Fields = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.h2`
    font-weight: normal;
    margin: 0px 8px 16px 8px;
`

const Continent = styled.span`
    white-space: nowrap;
    font-size: 18px;
`

const columns: Array<{ title: string, key: keyof LanguageRecord }> = [
    { key: 'code', title: 'Code'},
    { key: 'name', title: 'Name'},
    { key: 'native', title: 'Native'}
]

export const CountryCard: FunctionComponent<CountryCardProps> = (props) => {
    return <Card to={`/countries/${props.country.code}`}>
        <Fields>
            <Header>
                <Title>{props.country.name} / {props.country.native}</Title>
                <Continent>{props.country.continent.name}</Continent>
            </Header>
            <Table
                columns={columns}
                items={props.country.languages}
                placeholder="No languages"
            />
        </Fields>
    </Card>
}

export default React.memo(CountryCard);
