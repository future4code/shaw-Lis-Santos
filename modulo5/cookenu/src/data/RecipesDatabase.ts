import { Recipe } from '../model/Recipe'
import { BaseDatabase } from './BaseDatabase'

export class RecipesDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection('recipes_cookenu').insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                created_at: recipe.getCreatedAt()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getRecipeById(id: string) {
        try {
            const recipe = await BaseDatabase.connection('recipes_cookenu').select('id', 'title', 'description', 'created_at').where({ id })
            return recipe
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}