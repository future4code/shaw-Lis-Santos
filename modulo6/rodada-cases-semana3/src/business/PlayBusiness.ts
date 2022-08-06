import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { PlayDataBase } from "../data/PlayBaseDatabase";
import { CustomError } from "../error/CustomError";
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
                throw new CustomError(422, "Insira corretamente a informação de 'id_competition', 'id_athlete', 'value' e 'unity'")
            }
            const competition = await this.competitionDatabase.getCompetitionById(id_competition)
            if (competition.status === STATUS.FINALIZADA) {
                throw new CustomError(422, "Não é possível aceitar cadastro de uma competição já finalizada")
            }

            if (competition.name === COMPETITION.DARDO) {
                if (unity !== UNITY.m) {
                    throw new CustomError(422, "Essa unidade não é compatível com a competição")
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
                    if (value.length !== 3) {
                        throw new CustomError(422, "Devem ser passados três resultados no 'value'")
                    }
                    await this.playDatabase.insertPlay(play)
                }
            }
            const id = this.idGenerator.generateId()
            if (competition.name === COMPETITION._100M) {
                if (unity !== UNITY.s) {
                    throw new CustomError(422, "Essa unidade não é compatível com a competição")
                }
                if (typeof value === 'object' && value.length > 1) {
                    throw new CustomError(422, "Deve ser passado apenas um resultado no 'value'")
                }
                const play = new Plays(
                    id,
                    id_competition,
                    id_athlete,
                    Number(value),
                    unity
                )
                const result = await this.playDatabase.insertPlay(play)
                return result

            }
        } catch (error: any) {
            throw new CustomError(500, error.slqMessage || error.message)
        }
    }
    getResultByIdCompetition = async (id_competition: string) => {
        try {
            if (!id_competition) {
                throw new CustomError(422, "Insira uma competição com esse id")
            }
            const resultDb = await this.playDatabase.selectResultByIdCompetition(id_competition)
            if (!resultDb) {
                throw new CustomError(422, "Não existe competição com esse id")
            }
            return resultDb
        } catch (error: any) {
            throw new CustomError(500, error.slqMessage || error.message)
        }
    }
}