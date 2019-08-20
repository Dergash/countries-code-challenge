
/**
 * Basic interface for GraphQL responses
 * 
 * @param __typeName Meta field with name of entity that being requested 
 */
export interface GraphQLRecord {
    __typeName: string
}

/**
 * Response for https://countries.trevorblades.com endpoint
 */
export interface CountriesResponse extends GraphQLRecord {
    countries: CountryRecord[]
}

/**
 * Country record
 * 
 * @param name International country name
 * @param native Native country name
 * @param currency Currency code as per ISO 4217 (https://www.iso.org/iso-4217-currency-codes.html)
 * @param languages Languages used in a country
 */
export interface CountryRecord extends GraphQLRecord {
    name: string,
    native: string,
    currency: string,
    languages: LanguageRecord[]
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
