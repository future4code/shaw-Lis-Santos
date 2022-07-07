import { Post } from "../model/Post"
import { PostDataDTO } from "../types/inputsDTO"
import { BaseDataBase } from "./BaseDataBase"

export default class PostData extends BaseDataBase {
    protected TABLE_NAME = 'labook_posts'

    insert = async (post: PostDataDTO) => {
        try {
            const {id, photo, description, type, author_id } = post
            await BaseDataBase.connection(this.TABLE_NAME).insert({id, photo, description, type, author_id })
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