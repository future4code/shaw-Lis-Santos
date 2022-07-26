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
            const message = await this.buyerBusiness.insertBuyer(input)
            res.status(201).send({message})
        } catch (error: any) {
            res.send(error.sqlMessage || error.message)
        }
    }
    getBuyerById = async (req: Request, res: Response) => {
        const { id } = req.params
        const payment = await this.buyerBusiness.getBuyerById(id)
        res.status(200).send(payment)
    }
}