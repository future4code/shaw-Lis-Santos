import { Plays } from "../../src/model/Plays"
import { play1, play2 } from "./PlayMock"

export class PlayDataBaseMock {
    selectResultByIdCompetition = async (id_competition: string): Promise<Plays | undefined> => {
        switch (id_competition) {
            case "id_competition1":
                return play1
            case "id_competition2":
                return play2
            default:
                return undefined
        }
    }
    insertPlay = async (play: Plays) => {
        switch (play.getId()) {
            case "id_mock":
                return "Resultado cadastrado com sucesso!"
            default:
                throw new Error("Error")

        }
    }
}