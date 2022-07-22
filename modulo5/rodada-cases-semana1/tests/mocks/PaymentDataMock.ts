import { PaymentModel } from "../../src/model/PaymentModel"
import { payment } from "./PaymentMock"

export class PaymentDataMock {
    public async getPaymentById(id: string): Promise<PaymentModel | undefined> {
        switch (id) {
            case "id_mock":
                return payment
            default: 
            return undefined
        }
    }
}