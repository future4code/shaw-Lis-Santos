import { Competition } from "../../src/model/Competition"
import { PlaysDTO } from "../../src/model/Plays"
import { competition1, competition2 } from "./CompetitionMock"

export class CompetitionDatabaseMock {

    insertCompetition = async (competition: Competition): Promise<string> => {
        switch (competition.getId()) {
            case "id_mock":
                return "Competição criada com sucesso!"
            default:
                throw new Error("Error")
        }
    }

    selectCompetitionById = async (id: string): Promise<Competition | undefined> => {
        switch (id) {
            case "id_competition1":
                return competition1
            case "id_competition2":
                return competition2
            default:
                return undefined
        }
    }
    updateCompetition = async (id: string): Promise<string> => {
        switch (id) {
            case "id_mock":
                return "Status modificado!"
            default:
                return "Error"
        }
    }
    getCompetitionById = async (id: string): Promise<Competition | undefined> => {
        switch (id) {
            case "id_mock":
                return competition2
            default:
                return undefined
        }
    }
    getAllCompetitions = async (): Promise<Competition[]> => {
        return [competition1, competition2]
    }
}