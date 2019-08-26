import {gql} from 'apollo-server-koa';
import * as countries from './data/countries.json';
import {Country, CountryQueryResolver} from './interfaces/Country'

export const typeDefs = gql`
    type Country {
        name: String
        native: String
        currency: String
        code: String
        phone: String
        continent: Continent
        languages: [Language]
    }

    type Continent {
        name: String
    }

    type Language {
        code: String
        name: String
        native: String
    }

    type Query {
        countries: [Country]
        country(code: String): Country 
    }
`;

const countryResolver: CountryQueryResolver = (parent, { code } ) => {
    return (countries as Country[]).find(item => item.code === code)
}

export const resolvers = {
    Query: {
        countries: () => {
            return countries.map(item => {
                return item
            })
        },
        country: countryResolver
    },
};
