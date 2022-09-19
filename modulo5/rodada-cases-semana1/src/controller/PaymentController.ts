import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { CardBusiness } from "../business/CardBusiness";
import { paymentBoleto, paymentCard, TYPE } from "../model/PaymentModel";

export class PaymentController {
    constructor(
        private paymentBusiness = new PaymentBusiness(),
        private cardBusiness = new CardBusiness()
    ) { }

    createPayment = async (req: Request, res: Response) => {
        try {
            const { client_id, buyer_id, amount, type, status, card_holder, card_number, card_expiration_date, card_cvv } = req.body
            if (type === TYPE.CARD) {
                const inputCard: paymentCard = {
                    buyer_id,
                    card_holder,
                    card_number,
                    card_expiration_date,
                    card_cvv
                }
                const inputPayment = {
                    client_id,
                    buyer_id,
                    type,
                    amount,
                    status
                }
                const result = await this.cardBusiness.addCard(inputCard)
                await this.paymentBusiness.createPayment(inputPayment)
                res.status(201).send({ message: "Pagamento realizado com sucesso!", result })
            } else {
                const inputBoleto: paymentBoleto = {
                    client_id,
                    buyer_id,
                    amount,
                    type,
                    status
                }
                await this.paymentBusiness.createPayment(inputBoleto)
                const boletoNumber = Date.now()
                res.status(201).send({ message: `Número do boleto: ${boletoNumber}` })
            }
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    getPayment = async (req: Request, res: Response) => {
        const { id } = req.params
        const payment = await this.paymentBusiness.getPayment(id)
        res.status(200).send(payment)
    }
}