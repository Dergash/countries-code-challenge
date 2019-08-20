import React, {FunctionComponent} from 'react';
import {RouteComponentProps} from 'react-router';
import {useQuery} from '@apollo/react-hooks'
import {fetchCountries} from '../api/countries'
import {CountriesResponse} from '../interfaces/countries'
import CountryCard from './CountryCard';
import styled from 'styled-components'

interface CountriesListProps extends Partial<RouteComponentProps> {

}

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    padding: 0px 8px 0px 8px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const CountriesList: FunctionComponent<CountriesListProps> = (props) => {
    const {loading, error, data} = useQuery<CountriesResponse>(fetchCountries)
    const countries = data && data.countries
    return <div>
        For requesting GraphQL API and rendering the list.
        { loading &&
            <span>loading</span>
        }
        { error &&
            <span>{error}</span>
        }
        { !loading && !error && countries &&
            <List>
                {countries.map((item, index) => <CountryCard key={index} country={item} />)}
            </List>
        }
    </div>
}

export default React.memo(CountriesList);
