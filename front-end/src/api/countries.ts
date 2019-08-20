import gql from 'graphql-tag';

export const fetchCountries = gql`
{
    countries {
        name
        native
        currency
        languages {
            code
            name
            native
        }
        continent { name }
    }
}
`
