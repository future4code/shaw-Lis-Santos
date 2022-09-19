export enum TYPE {
    CARD = "CARTÃO DE CRÉDITO",
    BOLETO = "BOLETO"
}

export enum STATUS {
    A_PAGAR = "A PAGAR",
    PAGO = "PAGO"
}

export class PaymentModel {
    constructor(
        private id: string,
        private client_id: string,
        private buyer_id: string,
        private amount: number,
        private type: TYPE,
        private status: STATUS
    ) { }
}

export interface PaymentDTO {
    client_id: string,
    buyer_id: string,
    amount: number,
    type: TYPE,
    status: STATUS
}

export interface paymentCard {
    buyer_id: string
    card_holder: string
    card_number: string
    card_expiration_date: string
    card_cvv: number
}

export interface paymentBoleto {
    client_id: string
    buyer_id: string
    amount: number
    type: TYPE
    status: STATUS
}