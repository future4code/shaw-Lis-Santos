import { ClientData } from "../data/ClientData";
import { ClientModel } from "../model/ClientModel";
import { IdGenerator } from "../services/IdGenerator";

export class ClientBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private clientData = new ClientData()
    ) { }
    async insertClient() {
        const id = this.idGenerator.generateId()
        const newClient = new ClientModel(
            id
        )
        await this.clientData.insert(newClient)
        return newClient
    }
}