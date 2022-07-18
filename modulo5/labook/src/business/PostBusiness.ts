import PostData from "../data/PostData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { PostDataDTO, PostInputDTO, TYPE } from "../types/inputsDTO";

export default class PostBusiness {
    postData = new PostData()
    idGenerator = new IdGenerator()
    hashManager = new HashManager()
    authenticator = new Authenticator()

    createPost = async (input: PostInputDTO) => {
        const { photo, description, type, author_id } = input
        if (!photo || !description || !type || !author_id) {
            throw new Error("Insira corretamente as informações de 'photo', 'description', 'type' e 'author_id'.")
        }
        if (type !== TYPE.NORMAL && type !== TYPE.EVENT) {
            throw new Error("O type passado é invalido. Preencha com os valor de normal ou evento")
        }

        const id = this.idGenerator.generateId()
        const post: PostDataDTO = {
            id,
            photo,
            description,
            type,
            author_id
        }
        await this.postData.insert(post)
    }
    getPost = async (id: string) => {
        if (!id) {
            throw new Error("Insira um id de post")
        }
        const postData = new PostData()
        const postDatabase = await postData.getPostById(id)
        if (!postDatabase) {
            throw new Error("Não existe post com esse id")
        }
        return postDatabase
    }
}