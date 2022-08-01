import { Request, Response } from 'express'
import { ResultBusiness } from '../business/ResultBusiness'
import { ResultDTO } from '../model/Result'

export class ResultController {
    constructor(
        private resultBusiness: ResultBusiness
    ) { }

    registerResult = async (req: Request, res: Response) => {
        try {
            const {competicao_id} = req.params
            const { atleta, value, unidade } = req.body
            
            const input: ResultDTO = {
                competicao_id,
                atleta,
                value,
                unidade
            }
            await this.resultBusiness.registerResult(input)
            res.status(201).send({ message: "Resultado cadastrado com sucesso!" })
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
}