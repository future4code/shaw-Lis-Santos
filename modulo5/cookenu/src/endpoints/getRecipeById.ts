import { Request, Response } from 'express'
import { RecipesDatabase } from '../data/RecipesDatabase'
import { Authenticator } from '../services/Authenticator'

export async function getRecipeById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { id } = req.params

        const authenticator = new Authenticator()

        const RecipeDatabase = new RecipesDatabase()
        const recipe = await RecipeDatabase.getRecipeById(id)
        res.status(200).send(recipe)
        if (!token) {
            res.status(422).send('Esse endpoint exige uma autorização a ser passada nos headers')
        }

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}