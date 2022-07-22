import { PaymentData } from "../data/PaymentData";
import { PaymentDTO, PaymentModel, TYPE } from "../model/PaymentModel";
import { IdGenerator } from "../services/IdGenerator";
import { STATUS } from "../model/PaymentModel";

export class PaymentBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private paymentData = new PaymentData()
    ) { }
    async createPayment(input: PaymentDTO) {
        const { client_id, buyer_id, amount, type } = input
        let { status } = input
        try {
            if (!client_id || !buyer_id || !amount || !type) {
                throw new Error("Preencha corretamente os campos 'client_id', 'buyer_id', 'amount', 'type'")
            }
            if (type === TYPE.BOLETO) {
                status = STATUS.A_PAGAR
            }

            if (type === TYPE.CARD) {
                status = STATUS.PAGO
            }
            const id = this.idGenerator.generateId()

            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status
            )
            await this.paymentData.insertPayment(newPayment)
            return newPayment
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getPayment = async (id: string) => {
        try {
            if (!id) {
                throw new Error("Insira um id de pagamento")
            }
            const paymentDatabase = await this.paymentData.getPaymentById(id)

            if (!paymentDatabase) {
                throw new Error("Não existe pagamento com esse id")
            }
            return paymentDatabase
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}