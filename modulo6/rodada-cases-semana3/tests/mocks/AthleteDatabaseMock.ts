import { Athlete } from "../../src/model/Athlete"

export class AthleteDatabaseMock {
    insertAthlete = async (athlete: Athlete): Promise<string> => {
        switch (athlete.getId()) {
            case "id_mock":
                return  "Atleta adicionado com sucesso!"
            default:
                throw new Error("Error")
        }
    }
}