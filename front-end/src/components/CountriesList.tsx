import React, {FunctionComponent} from 'react';
import {RouteComponentProps} from 'react-router';

interface CountriesListProps extends Partial<RouteComponentProps> {

}

export const CountriesList: FunctionComponent<CountriesListProps> = (props) => {
    return <div>
        For requesting GraphQL API and rendering the list.
        Design is totally by me :)
    </div>
}

export default CountriesList;
