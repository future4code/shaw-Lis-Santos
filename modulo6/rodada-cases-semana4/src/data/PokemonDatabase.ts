import { Pokemon } from "../model/Pokemon"
import { BaseDatabase } from "./BaseDatabase"

export class PokemonDatabase extends BaseDatabase {
    protected TABLE_NAME = 'mytable'

    getAllPokemon = async (): Promise<Pokemon[]> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
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
}