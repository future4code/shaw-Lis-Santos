import { BuyersData } from "../data/BuyersData"
import { BuyerDTO, BuyersModel } from "../model/BuyersModel"
import { IdGenerator } from "../services/IdGenerator"
import { CustomError } from "../error/CustomError"

export class BuyerBusiness {
    constructor(
        private idGenerator = new IdGenerator,
        private buyersData = new BuyersData
    ) { }
    async insertBuyer(input: BuyerDTO) {
        const { name, email, CPF } = input

        if (!name || !email || !CPF) {
            throw new CustomError(422, "Preencha corretamente as informações de 'name', 'email' e 'CPF'")
        }

        if (!email.includes("@")) {
            throw new CustomError(400, "Verifique se o campo de e-mail foi passado corretamente")
        }

        if (CPF.length !== 11) {
            throw new CustomError(400, "O CPF precisa ter 11 dígitos")
        }
        const registeredEmail = await this.buyersData.findByEmail(email)
        if (registeredEmail) {
            throw new CustomError(409, "E-mail já cadastrado")
        }

        const registeredCpf = await this.buyersData.findByCpf(CPF)
        if (registeredCpf) {
            throw new CustomError(409, "CPF já cadastrado")
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
    getBuyerById = async (id: string): Promise<BuyersModel> => {
        try {
            if (!id) {
                throw new Error("Insira um id de comprador")
            }
            const buyerDatabase = await this.buyersData.findById(id)

            if (!buyerDatabase) {
                throw new Error("Não existe comprador com esse id")
            }
            return buyerDatabase
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}