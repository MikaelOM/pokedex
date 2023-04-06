export interface pokemonPropertiesParams {
    params: pokemonProperties
}

export interface pokemonProperties {
    name: string
    id: number
    url: string
}

export interface PropertiesPokemonSpecific {
    pokemon: {
        name: string
        id: number
        url: string
        height: number
        weight: number
        abilities: []
        types: []
    }
}

export interface pokemonType {
    type: {
        name: string
    }
}

export interface propertiesPokemonPage {
    params: {
        pokemonId: string
    }
}