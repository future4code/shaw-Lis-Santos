import { Request, Response } from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"

export class PokemonController {
    constructor(
        private pokemonBusiness: PokemonBusiness
    ) { }
    getAllPokemon = async (req: Request, res: Response) => {
        try {
            const result = await this.pokemonBusiness.getAllPokemon()
            res.status(200).send(result)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByName = async (req: Request, res: Response) => {
        try {
            const { name } = req.params
            const pokemonName = await this.pokemonBusiness.getPokemonByName(name)
            res.status(200).send(pokemonName)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByGeneration = async (req: Request, res: Response) => {
        try {
            const generation = Number(req.params.generation)
            const pokemonGeneration = await this.pokemonBusiness.getPokemonByGeneration(generation)
            res.status(200).send(pokemonGeneration)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByPokedexNumber = async (req: Request, res: Response) => {
        try {
            const pokedex_number = Number(req.params.pokedex_number)
            const pokedexNumber = await this.pokemonBusiness.getPokemonByPokedexNumber(pokedex_number)
            res.status(200).send(pokedexNumber)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType1 = async (req: Request, res: Response) => {
        try {
            const { type1 } = req.params
            const pokemonType1 = await this.pokemonBusiness.getPokemonByType1(type1)
            res.status(200).send(pokemonType1)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType2 = async (req: Request, res: Response) => {
        try {
            const { type2 } = req.params
            const pokemonType2 = await this.pokemonBusiness.getPokemonByType2(type2)
            res.status(200).send(pokemonType2)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}