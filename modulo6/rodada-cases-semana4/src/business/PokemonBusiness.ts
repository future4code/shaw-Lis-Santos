import { PokemonDatabase } from "../data/PokemonDatabase";
import { Pokemon } from "../model/Pokemon";

export class PokemonBusiness {
    constructor(
        private pokemonDatabase: PokemonDatabase
    ) { }
    getAllPokemon = async () => {
        try {
            const result = await this.pokemonDatabase.getAllPokemon()
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByName = async (name: string) => {
        try {
            const pokemonNameDatabase = await this.pokemonDatabase.getPokemonByName(name)
            return pokemonNameDatabase
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByGeneration = async (generation: number) => {
        try {
            const pokemonGenerationDataBase = await this.pokemonDatabase.getPokemonByGeneration(generation)
            return pokemonGenerationDataBase
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}