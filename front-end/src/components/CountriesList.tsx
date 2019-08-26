import React, {FunctionComponent} from 'react';
import {RouteComponentProps} from 'react-router';
import {useQuery} from '@apollo/react-hooks';
import {fetchCountries} from '../api/countries';
import {CountriesResponse} from '../interfaces/countries'
import CountryCard from './CountryCard';
import styled from 'styled-components';
import Button from './Button';

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

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const PaginationContainer = styled.div`
    
width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
`

const PaginationControls = styled.div`
    margin-top: 16px;
    margin-right: 8px;
    align-self: flex-end;
`

const Spinner = styled.span`
    font-size: 22px;
`

const pageSize = 30

export const CountriesList: FunctionComponent<CountriesListProps> = (props) => {
    const {loading, error, data} = useQuery<CountriesResponse>(fetchCountries)
    const [ page, setPage ] = React.useState(0)
    const countries = data && data.countries
    const handlePrevPage = React.useCallback(() => { setPage(page - 1)}, [page])
    const handleNextPage = React.useCallback(() => { setPage(page + 1)}, [page])
    const countriesPage = React.useMemo(() => {
        return countries
            ? countries.slice(page * pageSize, (page + 1) * pageSize)
            : []
    }, [countries, page])

    return <Container>
        { loading &&
            <Spinner>Fetching countries...</Spinner>
        }
        { error &&
            <span>{error}</span>
        }
        { !loading && !error && countries &&
            <PaginationContainer>
                <PaginationControls>
                    <Button
                        disabled={page === 0}
                        onClick={handlePrevPage}
                    >
                        Previous page
                    </Button>
                    <Button
                        disabled={(page + 1) * pageSize >= countries.length}
                        onClick={handleNextPage}
                    >
                        Next page
                    </Button>
                </PaginationControls>
                <List>
                    {countriesPage.map(item => <CountryCard key={item.code} country={item} />)}
                </List>
            </PaginationContainer>
        }
    </Container>
}

export default React.memo(CountriesList);
