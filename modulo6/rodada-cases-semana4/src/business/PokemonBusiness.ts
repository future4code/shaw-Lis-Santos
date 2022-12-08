import { PokemonDatabase } from "../data/PokemonDatabase";
import { Pokemon } from "../model/Pokemon";

export class PokemonBusiness {
    constructor(
        private pokemonDatabase: PokemonDatabase
    ) { }
    getAllPokemon = async (page: number): Promise<Pokemon[] | undefined> => {
        try {
            const size = 10
            let offset = (page - 1) * size
            if (page < 1 || page > 83) {
                throw new Error("Insira um valor válido de 1 a 83")
            } else if (page) {
                const result = await this.pokemonDatabase.getAllPokemon(size, offset)
                return result
            } else if (!page) {
                const result = await this.pokemonDatabase.getAllPokemon()
                return result
            }

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByName = async (name: string): Promise<Pokemon | undefined> => {
        try {
            if (!name || name === ":name") {
                throw new Error("Insira um nome de pokemon")
            }
            const pokemonDb = await this.pokemonDatabase.getPokemonByName(name)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByGeneration = async (generation: number): Promise<Pokemon[] | undefined> => {
        try {
            if (!generation || generation === 0) {
                throw new Error("Insira uma geração")
            }
            if (generation > 7) {
                throw new Error("Insira um número de 1 a 7")
            }
            const pokemonDb = await this.pokemonDatabase.getPokemonByGeneration(generation)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
    getPokemonByPokedexNumber = async (pokedex_number: number): Promise<Pokemon[]> => {
        try {
            if (!pokedex_number || pokedex_number === 0) {
                throw new Error("Insira um número de pokedex para buscar o pokemon referente")
            }
            const pokemonDb = await this.pokemonDatabase.getPokemonByPokedexNumber(pokedex_number)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType1 = async (type1: string): Promise<Pokemon[]> => {
        try {
            if (!type1 || type1 === ":type1") {
                throw new Error("Insira o primeiro tipo do pokemon que deseja buscar")
            }
            const pokemonDb = await this.pokemonDatabase.getPokemonByType1(type1)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType2 = async (type2: string): Promise<Pokemon[]> => {
        try {
            if (!type2 || type2 === ":type2") {
                throw new Error("Insira o segundo tipo do pokemon que deseja buscar")
            }
            const pokemonDb = await this.pokemonDatabase.getPokemonByType2(type2)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}