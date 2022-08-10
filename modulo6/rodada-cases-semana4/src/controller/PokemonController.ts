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
            const generation  = Number(req.params.generation)
            const pokemonGeneration = await this.pokemonBusiness.getPokemonByGeneration(generation)
            res.status(200).send(pokemonGeneration)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}