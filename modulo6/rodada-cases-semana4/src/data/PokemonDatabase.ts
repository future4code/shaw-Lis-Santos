import { Pokemon } from "../model/Pokemon"
import { BaseDatabase } from "./BaseDatabase"

export class PokemonDatabase extends BaseDatabase {
    protected TABLE_NAME = 'mytable'

    getAllPokemon = async (size?: any, offset?: any): Promise<Pokemon[]> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .limit(size)
                .offset(offset)
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByName = async (name: string): Promise<Pokemon> => {
        try {
            const [result] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ name })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByGeneration = async (generation: number) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ generation })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByPokedexNumber = async (pokedex_number: number) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ pokedex_number })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType1 = async (type1: string) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ type1 })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType2 = async (type2: string) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ type2 })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}