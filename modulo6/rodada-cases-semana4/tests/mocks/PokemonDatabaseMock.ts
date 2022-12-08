import { Pokemon } from "../../src/model/Pokemon"
import { pokemon1, pokemon2 } from './PokemonMock'

export class PokemonDatabaseMock {

    getAllPokemon = async (size?: any, offset?: any): Promise<Pokemon[]> => {
        return [pokemon1, pokemon2]
    }

    getPokemonByName = async (name: string): Promise<Pokemon | undefined> => {
        switch (name) {
            case "Paçoca":
                return pokemon1
            case "Pipoca":
                return pokemon2
            default:
                return undefined

        }
    }
    getPokemonByGeneration = async (generation: number): Promise<Pokemon | undefined> => {
        switch (generation) {
            case 7:
                return pokemon1
            case 5:
                return pokemon2
            default:
                return undefined
        }
    }
    getPokemonByPokedexNumber = async (pokedex_number: number): Promise<Pokemon | undefined> => {
        switch (pokedex_number) {
            case 823:
                return pokemon1
            case 824:
                return pokemon2
            default:
                return undefined
        }
    }
    getPokemonByType1 = async (type1: string): Promise<Pokemon | undefined> => {
        switch (type1) {
            case "grass":
                return pokemon1
            case "poison":
                return pokemon2
            default:
                return undefined
        }
    }
    getPokemonByType2 = async (type2: string): Promise<Pokemon | undefined> => {
        switch (type2) {
            case "poison":
                return pokemon1
            case "grass":
                return pokemon2
            default:
                return undefined
        }
    }
}