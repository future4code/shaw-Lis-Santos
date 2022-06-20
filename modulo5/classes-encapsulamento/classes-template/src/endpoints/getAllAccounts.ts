import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";

export default async function getAllAccounts(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const userDB = new UserDataBase()
        const accounts = await userDB.getAllAccounts()
        res.send(accounts)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}