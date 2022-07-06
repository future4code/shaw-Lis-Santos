import { Post } from "../model/Post"
import { BaseDataBase } from "./BaseDataBase"

export default class PostData extends BaseDataBase {
    protected TABLE_NAME = 'labook_posts'

    insert = async (post: Post) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(post)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
    getPostById = async(id: string) => {
        const result = await BaseDataBase.connection(this.TABLE_NAME)
        .select("*")
        .where({id})
        return result
    }
}