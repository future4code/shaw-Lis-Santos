import { Request, Response } from "express"
import insertAddressBD from '../data/insertAddressBD'
import { getFullAddress } from '../services/getFullAddress'


export const insertAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const numero = Number(req.query.numero)
        const complemento = req.query.complemento as string

        console.log(numero)
        const address = await getFullAddress(cep, numero, complemento)

        if (!address) {
            throw new Error("CEP inválido")
        }

        await insertAddressBD(address)

        res.status(201).send("Endereço criado com sucesso")
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}