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
            throw new Error("Preencha corretamente as informações de 'name', 'email' e 'CPF'")
        }

        if (!email.includes("@")) {
            throw new Error("Verifique se o campo de e-mail foi passado corretamente")
        }

        if (CPF.length !== 11) {
            throw new Error("O CPF precisa ter 11 dígitos")
        }

        const registeredEmail = await this.buyersData.findByEmail(email)
        if (registeredEmail) {
            throw new Error("E-mail já cadastrado")
        }

        const cpfRegistered = await this.buyersData.findByCpf(CPF)
        if (cpfRegistered) {
            throw new Error("CPF já cadastrado")
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