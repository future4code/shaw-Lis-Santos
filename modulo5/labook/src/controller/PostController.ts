import { Request, Response } from 'express'
import PostBusiness from '../business/PostBusiness'
import { PostInputDTO } from '../types/inputsDTO'

export default class PostController {
    createPost = async (req: Request, res: Response) => {
        try {
            const { photo, description, type, author_id } = req.body

            const input: PostInputDTO = {
                photo,
                description,
                type,
                author_id
            }
            const tokenAuthorization = req.headers.authorization
            if (!tokenAuthorization) {
                res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers")
            }
            const postBusiness = new PostBusiness()

            const token = await postBusiness.createPost(input)
            res.status(201).send({ message: "Post criado com sucesso!", token })
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
    getPostById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const tokenAuthorization = req.headers.authorization as string
            if (!tokenAuthorization) {
                res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers")
            }
            const postBusiness = new PostBusiness()
            const post = await postBusiness.getPost(id)
            res.status(200).send(post)
        } catch (error: any) {
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }
}