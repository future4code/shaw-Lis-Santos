import { Request, Response } from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"

export class PokemonController {
    constructor(
        private pokemonBusiness: PokemonBusiness
    ) { }
    getAllPokemon = async (req: Request, res: Response) => {
        try {
            let page = Number(req.query.page)
            const result = await this.pokemonBusiness.getAllPokemon(page)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    getPokemonByName = async (req: Request, res: Response) => {
        try {
            const { name } = req.params
            const pokemon = await this.pokemonBusiness.getPokemonByName(name)
            res.status(200).send(pokemon)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    getPokemonByGeneration = async (req: Request, res: Response) => {
        try {
            const generation = Number(req.params.generation)
            const pokemon = await this.pokemonBusiness.getPokemonByGeneration(generation)
            res.status(200).send(pokemon)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByPokedexNumber = async (req: Request, res: Response) => {
        try {
            const pokedex_number = Number(req.params.pokedex_number)
            const pokemon = await this.pokemonBusiness.getPokemonByPokedexNumber(pokedex_number)
            res.status(200).send(pokemon)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType1 = async (req: Request, res: Response) => {
        try {
            const { type1 } = req.params
            const pokemon = await this.pokemonBusiness.getPokemonByType1(type1)
            res.status(200).send(pokemon)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPokemonByType2 = async (req: Request, res: Response) => {
        try {
            const { type2 } = req.params
            const pokemon = await this.pokemonBusiness.getPokemonByType2(type2)
            res.status(200).send(pokemon)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}