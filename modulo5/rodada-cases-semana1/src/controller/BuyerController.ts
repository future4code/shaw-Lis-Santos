import { Request, Response } from 'express'
import { BuyerBusiness } from "../business/BuyerBusiness";
import { BuyerDTO } from '../model/BuyersModel';

export class BuyerController {
    constructor(
        private buyerBusiness = new BuyerBusiness()
    ) { }

    insertBuyer = async (req: Request, res: Response) => {
        const { name, email, CPF } = req.body

        const input: BuyerDTO = {
            name,
            email,
            CPF
        }
        try {
            await this.buyerBusiness.insertBuyer(input)
            res.status(201).send({ message: "Comprador adicionado com sucesso!" })
        } catch (error: any) {
            res.send(error.sqlMessage || error.message)
        }
    }
}