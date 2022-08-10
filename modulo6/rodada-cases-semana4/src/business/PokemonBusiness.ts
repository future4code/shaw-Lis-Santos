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

            if (page < 1) {
                throw new Error("Insira um valor maior do que 1")
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
    getPokemonByName = async (name: string): Promise<Pokemon> => {
        try {
            const pokemonDb = await this.pokemonDatabase.getPokemonByName(name)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByGeneration = async (generation: number): Promise<Pokemon[]> => {
        try {
            const pokemonDb = await this.pokemonDatabase.getPokemonByGeneration(generation)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
    getPokemonByPokedexNumber = async (pokedex_number: number): Promise<Pokemon[]> => {
        try {
            const pokemonDb = await this.pokemonDatabase.getPokemonByPokedexNumber(pokedex_number)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType1 = async (type1: string): Promise<Pokemon[]> => {
        try {
            const pokemonDb = await this.pokemonDatabase.getPokemonByType1(type1)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType2 = async (type2: string): Promise<Pokemon[]> => {
        try {
            const pokemonDb = await this.pokemonDatabase.getPokemonByType2(type2)
            return pokemonDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}