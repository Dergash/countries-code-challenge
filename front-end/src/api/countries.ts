import gql from 'graphql-tag';

export const fetchCountries = gql`
{
    countries {
        name
        native
        currency
        code
        languages {
            code
            name
            native
        }
        continent { name }
    }
}
`
export const fetchCountry = gql`
    query Country($countryCode: String!) {
        country(code: $countryCode) {
            name
            code
            currency
            phone
        }
    }
`
