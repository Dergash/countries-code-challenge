import React, {FunctionComponent} from 'react';
import {RouteComponentProps} from 'react-router';
import {useQuery} from '@apollo/react-hooks'
import {fetchCountries} from '../api/countries'
import {CountriesResponse} from '../interfaces/countries'

interface CountriesListProps extends Partial<RouteComponentProps> {

}

export const CountriesList: FunctionComponent<CountriesListProps> = (props) => {
    const {loading, error, data} = useQuery<CountriesResponse>(fetchCountries)
    const countries = data && data.countries
    return <div>
        For requesting GraphQL API and rendering the list.
        Design is totally by me :)
        { loading &&
            <span>loading</span>
        }
        { error &&
            <span>{error}</span>
        }
        { !loading && !error && countries && countries.map((item, index) =>
            <div>
                Country name: {item.name}
                Country native name: {item.native}
                <table>
                    <thead>
                        <th>
                            Language name
                        </th>
                        <th>
                            Language native name
                        </th>
                    </thead>
                    <tbody>
                        { item.languages.map(language =>
                            <tr key={language.code}>
                                <td>
                                    {language.name}
                                </td>
                                <td>
                                    {language.native}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )}
    </div>
}

export default CountriesList;
