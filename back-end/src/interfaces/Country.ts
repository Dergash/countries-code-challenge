export interface Country {
    name: String
    native: String
    currency: String
    code: String
    phone: String
    continent: Continent
    languages: Language[]
}

export interface Continent {
    name: string
}

export interface Language {
    code: string,
    name: string,
    native: string
}

export type CountryQueryResolver = (parent: Country, args: Partial<Country>) => Partial<Country> | undefined
