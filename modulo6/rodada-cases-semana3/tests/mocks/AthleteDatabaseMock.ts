import { Athlete } from "../../src/model/Athlete"
import { athlete1, athlete2 } from "./AthleteMock"

export class AthleteDatabaseMock {
    insertAthlete = async (athlete: Athlete): Promise<string> => {
        switch (athlete.getId()) {
            case "id_mock":
                return  "Atleta adicionado com sucesso!"
            default:
                throw new Error("Error")
        }
    }
    getAllAthletes = async (): Promise<Athlete[]> => {
        return [athlete1, athlete2]
    }
}