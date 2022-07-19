import { BuyersData } from "../data/BuyersData";
import { BuyerDTO, BuyersModel } from "../model/BuyersModel";
import { IdGenerator } from "../services/IdGenerator";

export class BuyerBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private buyersData = new BuyersData
    ) { }
    async insertBuyer(input: BuyerDTO) {
        const { name, email, CPF } = input

        if (!name || !email || !CPF) {
            throw new Error("Preencha todos os campos")
        }
        const id = this.idGenerator.generateId()

        const newBuyer = new BuyersModel(
            id, 
            name, 
            email, 
            CPF
        )
        await this.buyersData.insert(newBuyer)
        return newBuyer
    }
}