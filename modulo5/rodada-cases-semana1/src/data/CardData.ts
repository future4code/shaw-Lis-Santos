import { CardModel } from "../model/CardModel"
import { BaseDataBase } from "./BaseDatabase"

export class CardData extends BaseDataBase {
    protected TABLE_NAME = "card_wirecard"

    insert = async (card: CardModel) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(card)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}