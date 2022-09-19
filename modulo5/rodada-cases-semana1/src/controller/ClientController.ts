import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";

export class ClientController {
    constructor(
        private clientBusiness = new ClientBusiness()
    ) { }
    insertClient = async (req: Request, res: Response) => {
        try {
            await this.clientBusiness.insertClient()
            res.status(201).send({ message: "Vendedor criado com sucesso!" })
        } catch (error: any) {
            res.send(error.sqlMessage || error.message)
        }
    }
}