import { BuyerBusiness } from "../src/business/BuyerBusiness"
import { IdGeneratorMock } from "./mocks/idGeneratorMock"
import { PaymentBusiness } from "../src/business/PaymentBusiness"
import { PaymentDataMock } from "./mocks/PaymentDataMock"
import { payment } from "./mocks/PaymentMock"
import { Buyer1, Buyer2 } from "./mocks/BuyerMock"
import { BuyerDatabaseMock } from "./mocks/BuyerDataMock"
import { BuyerDTO } from "../src/model/BuyersModel"


const buyerBusinessMock = new BuyerBusiness(
    new IdGeneratorMock as any,
    new BuyerDatabaseMock as any
)

const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock as any,
    new PaymentDataMock as any
)

describe("Buyer table tests", () => {
    test("Test getBuyerById, empty id parameter", async () => {
        expect.assertions(1)
        try {
            await buyerBusinessMock.getBuyerById("")
        } catch (error: any) {
            expect(error.message).toBe("Insira um id de comprador")
        }
    })
    test("Sucess test buyer", async () => {
        expect.assertions(1)
        try {
            const result = await buyerBusinessMock.getBuyerById("id_buyer")
            console.log(result)
            expect(result).toBe(Buyer1)

        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("Inserindo comprador", async () => {
        expect.assertions(1)
        try {
            const user: BuyerDTO = {
                name: "Lis",
                email: "lis@gmail.com",
                CPF: "12345678911"
            }
            const message = await buyerBusinessMock.insertBuyer(user)
            expect(message).toBe("Comprador adicionado com sucesso!")
        } catch (error: any) {
            console.log(error)
        }
    })
})

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