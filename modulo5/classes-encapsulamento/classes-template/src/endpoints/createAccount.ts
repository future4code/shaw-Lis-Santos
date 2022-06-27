import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import { UserAccount } from '../index'

export const createAccount = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { cpf, name, age } = req.body

        const account = new UserAccount(cpf, name, age)
        const accountDB = new UserDataBase()
        await accountDB.createAccount(account)
        res.status(201).end()
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}