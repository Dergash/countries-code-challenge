/**
 * Basic interface for GraphQL responses
 * 
 * @param __typeName Meta field with name of entity that being requested 
 */
export interface GraphQLRecord {
    __typeName: string
}

/**
 * Response for https://countries.trevorblades.com countries endpoint
 */
export interface CountriesResponse extends GraphQLRecord {
    countries: CountryRecord[]
}

/**
 * Response for https://countries.trevorblades.com country endpoint
 */
export interface CountryResponse extends GraphQLRecord {
    country: Pick<CountryRecord, 'name' | 'currency' | 'phone'>
}

/**
 * Country record
 * 
 * @param code Country code as per ISO 3166-1 alpha-2 (https://www.iso.org/iso-3166-country-codes.html)
 * @param name International country name
 * @param native Native country name
 * @param currency Currency code as per ISO 4217 (https://www.iso.org/iso-4217-currency-codes.html)
 * @param phone Area phone code
 * @param languages Languages used in a country
 * @param continent Continent where country is located
 */
export interface CountryRecord extends GraphQLRecord {
    code: string,
    name: string,
    native: string,
    currency: string,
    phone: string,
    languages: LanguageRecord[]
    continent: {
        name: string
    }
}

/**
 * Language record
 *
 * @param code Language code as per ISO 639-1 (https://www.iso.org/iso-639-language-codes.html)
 * @param name Name of the language
 * @param name Native name of the language
 */
export interface LanguageRecord extends GraphQLRecord {
    code: string,
    name: string,
    native: string
}
