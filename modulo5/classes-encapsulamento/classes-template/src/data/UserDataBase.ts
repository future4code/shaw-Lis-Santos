import knex from 'knex'
import { UserAccount } from '../index'
import dotenv from 'dotenv'

dotenv.config()

export default class UserDataBase {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        }
    })

    async getAllAccounts() {
        try {
            const accounts = await this.connection('accounts').select("*")
            return accounts
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    async createAccount(user: UserAccount) {
        try {
            await this.connection('accounts').insert(user)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}