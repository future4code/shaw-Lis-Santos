export class CardModel {
    constructor(
        private buyer_id: string,
        private card_holder: string,
        private card_number: string,
        private card_expiration_date: Date,
        private card_cvv: number
    ) { }
}
export interface inputDTO {
    buyer_id: string,
    card_holder: string,
    card_number: string,
    card_expiration_date: string,
    card_cvv: number
}