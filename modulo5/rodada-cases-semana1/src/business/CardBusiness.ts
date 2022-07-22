import { CardData } from "../data/CardData"
import { CardModel, inputDTO } from "../model/CardModel"
import { BuyersData } from "../data/BuyersData"
import { validCvv } from "../../tests/mocks/validCvv"
import { CustomError } from "../error/CustomError"

export class CardBusiness {
    constructor(
        private cardData = new CardData(),
        private buyerData = new BuyersData(),
    ) { }
    addCard = async (input: inputDTO) => {
        const { buyer_id, card_holder, card_number, card_expiration_date, card_cvv } = input
        const [mes, ano] = card_expiration_date.split("/")
        const card_expiration = new Date(`${ano}-${mes}-01`)
        if (card_expiration.getTime() < Date.now()) {
            throw new Error("Cartão com data vencida")
        }
        const validBuyer = await this.buyerData.findById(buyer_id)
        if (!validBuyer) {
            throw new CustomError(409, "O comprador não corresponde ao proprietário do cartão")
        }
        if (!card_expiration_date.includes("/") || card_expiration_date.length !== 7) {
            throw new CustomError(400, "Formato de data inválida")
        }
        if (!validCvv.includes(card_cvv)) {
            throw new Error("Pagamento não autorizado")
        }
        if (card_number.length !== 16) {
            throw new Error("O cartão deve possuir 16 dígitos")
        }
        if (card_cvv.toString().length !== 3) {
            throw new Error("O cvv deve possuir 3 dígitos")
        } else {
            const newCard = new CardModel(
                buyer_id,
                card_holder,
                card_number,
                card_expiration,
                card_cvv
            )
            await this.cardData.insert(newCard)
        }
    }
}