import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { CustomError } from "../error/CustomError";
import { Competition, CompetitionDTO, STATUS, COMPETITION } from "../model/Competition";
import { IdGenerator } from "../services/IdGenerator";

export class CompetitionBusiness {
    constructor(
        private competitionDataBase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ) { }

    createCompetition = async (input: CompetitionDTO) => {
        let { name, status } = input
        try {
            if (!name) {
                throw new CustomError(422, "Insira corretamente a informação de 'name'")
            }
            if (!status) {
                status = STATUS.NÃO_INICIALIZADA
            }
            if (status?.toUpperCase() === "FINALIZADA") {
                status = STATUS.FINALIZADA
            }
            if (status?.toUpperCase() === "ACONTECENDO AGORA") {
                status = STATUS.ACONTECENDO_AGORA
            }
            if (status?.toUpperCase() === "NÃO INICIALIZADA") {
                status = STATUS.NÃO_INICIALIZADA
            }
            if (status !== STATUS.FINALIZADA && status !== STATUS.ACONTECENDO_AGORA && status !== STATUS.NÃO_INICIALIZADA) {
                throw new CustomError(422, "O status passado é inválido. Preencha com os valores de FINALIZADA, ACONTECENDO AGORA OU NÃO INICIALIZADA")
            }
            if (name.toUpperCase() === "100m") {
                name = COMPETITION._100M
            }
            if (name.toUpperCase() === "Lançamento de dardo") {
                name = COMPETITION.DARDO
            }

            if (name !== COMPETITION._100M && name !== COMPETITION.DARDO) {
                throw new CustomError(422, "O name passado é inválido. Preencha com os valores de '100m' ou 'Lançamento de dardo'")

            }
            const id = this.idGenerator.generateId()
            const competition = new Competition(
                id,
                name,
                status
            )
            const result = await this.competitionDataBase.insertCompetition(competition)
            return result

        } catch (error: any) {
            throw new CustomError(500, error.slqMessage || error.message)
        }
    }
    putCompetitionById = async (id: string) => {
        try {
            if (!id) {
                throw new CustomError(422, "Insira uma competição com esse id")
            }
            const competitionDb = await this.competitionDataBase.getCompetitionById(id)
            if (!competitionDb) {
                throw new CustomError(422, "Não existe competição com esse id")
            }
            if (competitionDb.status === STATUS.FINALIZADA) {
                throw new CustomError(422, "Essa competição já se encontra finalizada")
            }
            return await this.competitionDataBase.updateCompetition(id)
        } catch (error: any) {
            throw new CustomError(500, error.slqMessage || error.message)
        }
    }
    getAllCompetitions = async (): Promise<Competition[]> => {
        try {
            const result = await this.competitionDataBase.getAllCompetitions()
            if(result.length === 0) {
                throw new CustomError(422, "Ainda não tem nenhuma competição cadastrada!")
            }
            return result
        } catch (error: any) {
            throw new CustomError(500, error.slqMessage || error.message)
        }
    }
}