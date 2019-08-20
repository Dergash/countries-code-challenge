import React, {FunctionComponent} from 'react';
import {RouteComponentProps} from 'react-router';
import {useQuery} from '@apollo/react-hooks'
import {fetchCountries} from '../api/countries'
import {CountriesResponse} from '../interfaces/countries'
import CountryCard from './CountryCard';
import styled from 'styled-components'

interface CountriesListProps extends Partial<RouteComponentProps> {

}

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    padding: 0px 8px 0px 8px;
    align-self: flex-start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Spinner = styled.span`
    font-size: 22px;
`

export const CountriesList: FunctionComponent<CountriesListProps> = (props) => {
    const {loading, error, data} = useQuery<CountriesResponse>(fetchCountries)
    const countries = data && data.countries
    return <Container>
        { loading &&
            <Spinner>Fetching countries...</Spinner>
        }
        { error &&
            <span>{error}</span>
        }
        { !loading && !error && countries &&
            <List>
                {countries.map(item => <CountryCard key={item.code} country={item} />)}
            </List>
        }
    </Container>
}

export default React.memo(CountriesList);
