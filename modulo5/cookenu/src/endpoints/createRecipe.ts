import { Request, Response } from "express";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { Authenticator } from "../services/Authenticator";
import { Recipe } from "../model/Recipe";
import { IdGenerator } from "../services/IdGenerator";
import moment from 'moment'

export default async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { title, description} = req.body

        const token = req.headers.authorization as string
        const generete = new IdGenerator()
        const id = generete.generate()
        const userAuthenticator = new Authenticator()
        const tokenID = userAuthenticator.getTokenData(token)
        const user_id = tokenID.id
        const created_at = moment().format("YYYY-MM-DD")
        const newRecipe = new Recipe(id, title, description, created_at, user_id )
        const recipeDB = new RecipesDatabase()
        await recipeDB.createRecipe(newRecipe)
        res.status(201).send(newRecipe)
    } catch (error: any) {
        res.send({ message: error.sqlMessage || error.message })
    }
}