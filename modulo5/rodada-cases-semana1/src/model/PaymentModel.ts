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
        id: string,
        client_id: string,
        buyer_id: string,
        amount: number,
        type: TYPE,
        status: STATUS
    ) { }
}