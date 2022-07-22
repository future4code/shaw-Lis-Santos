import { BuyerDatabaseMock } from "./mocks/BuyerDataMock"
import { BuyerBusiness } from "../src/business/BuyerBusiness"
import { IdGeneratorMock } from "./mocks/idGeneratorMock"
import { PaymentBusiness } from "../src/business/PaymentBusiness"
import { PaymentDataMock } from "./mocks/PaymentDataMock"
import { payment } from "./mocks/PaymentMock"


const buyerBusinessMock = new BuyerBusiness(
    new BuyerDatabaseMock as any,
    new IdGeneratorMock as any
)

const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock as any,
    new PaymentDataMock as any
)
describe("Payment table tests", () => {
    test("Test getPayment, empty id parameter", async () => {
        expect.assertions(1)
        try {
            await paymentBusinessMock.getPayment("")
        } catch (error: any) {
            expect(error.message).toBe("Insira um id de pagamento")
        }
    })
    test("Sucess test payment", async () => {
        expect.assertions(1)
        try {
            const result = await paymentBusinessMock.getPayment("id_mock")
            expect(result).toBe(payment)
        } catch (error: any) {
            console.log(error.message)
        }
    })
})