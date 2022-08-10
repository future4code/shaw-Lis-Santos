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
            const pokemonGeneration = await this.pokemonDatabase.getPokemonByGeneration(generation)
            return pokemonGeneration
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
    getPokemonByPokedexNumber = async (pokedex_number: number) => {
        try {
            const pokemonPokedexNumber = await this.pokemonDatabase.getPokemonByPokedexNumber(pokedex_number)
            return pokemonPokedexNumber
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType1 = async (type1: string) => {
        try {
            const pokemonType1 = await this.pokemonDatabase.getPokemonByType1(type1)
            return pokemonType1
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType2 = async (type2: string) => {
        try {
            const pokemonType2 = await this.pokemonDatabase.getPokemonByType2(type2)
            return pokemonType2
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}