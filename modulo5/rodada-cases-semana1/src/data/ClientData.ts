import { ClientModel } from "../model/ClientModel"
import { BaseDataBase } from "./BaseDatabase"

export class ClientData extends BaseDataBase {
    protected TABLE_NAME = 'clients_wirecard'

    insert = async (client: ClientModel) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(client)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}