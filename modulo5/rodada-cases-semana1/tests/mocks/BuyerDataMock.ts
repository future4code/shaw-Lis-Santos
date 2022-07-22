import { BuyersModel } from "../../src/model/BuyersModel"
import { Buyer1, Buyer2 } from "./BuyerMock"

export class BuyerDatabaseMock {
    public async insert(buyer: BuyersModel): Promise<void> { }

    public async findByEmail(email: string): Promise<BuyersModel | undefined> {
        switch (email) {
            case "email1@gmail.com":
                return Buyer1
            case "email2@gmail.com":
                return Buyer2
            default:
                return undefined
        }
    }
    public async findByCpf(cpf: string): Promise<BuyersModel | undefined> {
        switch (cpf) {
            case "12345678910":
                return Buyer1
            case "10987654321":
                return Buyer2
            default:
                return undefined
        }
    }
    public async findById(id: string): Promise<BuyersModel | undefined> {
        switch (id) {
            case "id_buyer":
                return Buyer1
            case "id_mock2":
                return Buyer2
            default:
                return undefined
        }
    }
}
//     public findById = async (id: string) => {
//         switch (id) {
//             case "id_mock1":
//                 return Buyer1
//             case "id_mock2":
//                 return Buyer2
//             default:
//                 return undefined
//         }
//     }
// }