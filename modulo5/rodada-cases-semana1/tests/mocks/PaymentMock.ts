import { PaymentModel, TYPE, STATUS } from "../../src/model/PaymentModel";

export const payment = new PaymentModel("id_mock", "id_client", "id_buyer", 130, TYPE.BOLETO, STATUS.PAGO)