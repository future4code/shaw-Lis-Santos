import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { PlayDataBase } from "../data/PlayBaseDatabase";
import { COMPETITION, STATUS } from "../model/Competition";
import { Plays, PlaysDTO, UNITY } from "../model/Plays";
import { IdGenerator } from "../services/IdGenerator";


export class PlayBusiness {
    constructor(
        private playDatabase: PlayDataBase,
        private idGenerator: IdGenerator,
        private competitionDatabase: CompetitionDatabase
    ) { }
    createPlay = async (input: PlaysDTO) => {
        const { id_competition, id_athlete, value, unity } = input
        try {
            if (!id_competition || !id_athlete || !value || !unity) {
                throw new Error("Insira corretamente a informação de 'id_competition', 'id_athlete', 'value' e 'unity'")
            }
            const competition = await this.competitionDatabase.getCompetitionById(id_competition)
            if (competition.status === STATUS.FINALIZADA) {
                throw new Error("Não é possível aceitar cadastros de uma competição já finalizada")
            }

            if (competition.name === COMPETITION.DARDO) {
                if (unity !== UNITY.m) {
                    throw new Error("Essa unidade não é compatível com a competição")
                }
                for (let nameValue of input.value) {
                    const id = this.idGenerator.generateId()
                    const play = new Plays(
                        id,
                        id_competition,
                        id_athlete,
                        nameValue,
                        unity
                    )
                    console.log(play)
                    await this.playDatabase.insertPlay(play)
                }
            }
            const id = this.idGenerator.generateId()
            if (competition.name === COMPETITION._100M) {
                if (unity !== UNITY.s) {
                    throw new Error("Essa unidade não é compatível com a competição")
                }
                const play = new Plays(
                    id,
                    id_competition,
                    id_athlete,
                    value,
                    unity
                )
                await this.playDatabase.insertPlay(play)
                
            }
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
    getResultByCompetition = async (id_competition: string) => {
        try {
            if (!id_competition) {
                throw new Error("Insira uma competição com esse id")
            }
            const resultDb = await this.playDatabase.getResultByIdCompetition(id_competition)
            if (!resultDb) {
                throw new Error("Não existe competição com esse id")
            }
            
            return resultDb
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}