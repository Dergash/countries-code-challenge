import React, {FunctionComponent} from 'react';
import {RouteComponentProps} from 'react-router';

interface CountryInfoProps extends Partial<RouteComponentProps> {

}

export const CountryInfo: FunctionComponent<CountryInfoProps> = (props) => {
    return <div>
        For requesting GraphQL API and rendering the properties of a continent
    </div>
}

export default React.memo(CountryInfo);
