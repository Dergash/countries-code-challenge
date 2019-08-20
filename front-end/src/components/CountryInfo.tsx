import React, {FunctionComponent} from 'react';
import {RouteComponentProps} from 'react-router';
import {CountryResponse, CountryRecord} from '../interfaces/countries'
import {fetchCountry} from '../api/countries'
import {useQuery} from '@apollo/react-hooks'
import styled from 'styled-components'
import Table from './Table'

interface CountryInfoProps extends Partial<RouteComponentProps<{ code: string }>> {

}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`

const Fields = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(15, 32, 45);
    padding: 16px;
    min-width: 500px;

    @media (max-width: 768px) {
        min-width: auto;
        width: 100%;
        margin: 8px;
    }
`

const Field = styled.span`
    display: flex;
    justify-content: space-between;
`

const HR = styled.hr`
    width: 100%;
    background-color: rgb(60, 70, 80);
    border: none;
    height: 1px;
`

const Spinner = styled.span`
    font-size: 22px;
`

export const CountryInfo: FunctionComponent<CountryInfoProps> = (props) => {
    const countryCode = props.match && props.match.params.code
    const {loading, error, data} = useQuery<CountryResponse>(fetchCountry, { variables: { countryCode }})
    return <Container>
        { loading &&
            <Spinner>Fetching {countryCode}...</Spinner>
        }
        { error &&
            <span>{error}</span>
        }
        { !loading && !error && data &&
            <Fields>
                <Field>
                    <span>Name:</span>
                    <span>{data.country.name}</span>
                </Field>
                <HR />
                <Field>
                    <span>Currency:</span>
                    <span>{data.country.currency}</span>
                </Field>
                <HR />
                <Field>
                    <span>Area code (phone):</span>
                    <span>{data.country.phone}</span>
                </Field>
                <HR />
            </Fields>
        }
    </Container>
}

export default React.memo(CountryInfo);
