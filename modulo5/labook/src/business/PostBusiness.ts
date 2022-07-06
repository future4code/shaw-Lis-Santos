import PostData from "../data/PostData";
import { Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { PostInputDTO } from "../types/singupInputDTO";

export default class PostBusiness {
    postData = new PostData()
    idGenerator = new IdGenerator()
    hashManager = new HashManager()
    authenticator = new Authenticator()

    createPost = async (input: PostInputDTO) => {
        const { photo, description, type, created_at, author_id } = input
        if (!photo || !description || !type || !created_at || !author_id) {
            throw new Error("Campos inválidos")
        }
        const id = this.idGenerator.generateId()
        const post = new Post(
            id, 
            photo, 
            description,
            type,
            created_at,
            author_id
        )
        await this.postData.insert(post)
    }
    getPost(id: string) {
        const postData = new PostData()
        const postDB = postData.getPostById(id)
        return postDB
    }
}