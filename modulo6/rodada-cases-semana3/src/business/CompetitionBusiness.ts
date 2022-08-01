import { CompetitionDatabase } from "../data/CompetitionDatabase";
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
                throw new Error("Insira corretamente a informação de 'name'")
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
                throw new Error("O status passado é invalido. Preencha com os valores de FINALIZADA, ACONTECENDO AGORA OU NÃO INICIALIZADA")
            }
            if (name.toUpperCase() === "100m classificatória1") {
                name = COMPETITION.PRIMEIRA_CLASSIFICATÓRIA_100M
            }
            if (name.toUpperCase() === "100m classificatória2") {
                name = COMPETITION.SEGUNDA_CLASSIFICATÓRIA_100M
            }
            if (name.toUpperCase() === "100m quartas de final") {
                name = COMPETITION.QUARTAS_FINAL_100M
            }
            if (name.toUpperCase() === "100m semifinal") {
                name = COMPETITION.SEMIFINAL_100M
            }
            if (name.toUpperCase() === "100m final") {
                name = COMPETITION.FINAL_100M
            }
            if (name.toUpperCase() === "Lançamento de Dardo classificatória1") {
                name = COMPETITION.PRIMEIRA_CLASSIFICATÓRIA_DARDO
            }
            if (name.toUpperCase() === "Lançamento de Dardo classificatória2") {
                name = COMPETITION.SEGUNDA_CLASSIFICATÓRIA_DARDO
            }
            if (name.toUpperCase() === "Lançamento de Dardo quartas de final") {
                name = COMPETITION.QUARTAS_FINAL_DARDO
            }
            if (name.toUpperCase() === "Lançamento de Dardo semifinal") {
                name = COMPETITION.SEMIFINAL_DARDO
            }
            if (name.toUpperCase() === "Lançamento de Dardo final") {
                name = COMPETITION.FINAL_DARDO
            }
            if (name !== COMPETITION.PRIMEIRA_CLASSIFICATÓRIA_100M && name !== COMPETITION.SEGUNDA_CLASSIFICATÓRIA_100M && name !== COMPETITION.QUARTAS_FINAL_100M && name !== COMPETITION.SEMIFINAL_100M && name !== COMPETITION.FINAL_100M && name !== COMPETITION.PRIMEIRA_CLASSIFICATÓRIA_DARDO && name !== COMPETITION.SEGUNDA_CLASSIFICATÓRIA_DARDO && name !== COMPETITION.QUARTAS_FINAL_DARDO && name !== COMPETITION.SEMIFINAL_DARDO && name !== COMPETITION.FINAL_DARDO) {
                throw new Error("O name passado é inválido. Preencha com os valores de: '100m classificatória1', '100m classificatória2', '100m quartas de final', '100m semifnal, '100m final', 'Lançamento de Dardo classificatória1', 'Lançamento de Dardo classificatória2', 'Lançamento de Dardo quartas de final', 'Lançamento de Dardo semifinal', 'Lançamento de Dardo final'")

            }
            const id = this.idGenerator.generateId()
            const competition = new Competition(
                id,
                name,
                status
            )
            await this.competitionDataBase.insertCompetition(competition)
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
    putCompetitionById = async (id: string) => {
        try {
            if (!id) {
                throw new Error("Insira uma competição com esse id")
            }
            const competitionDb = await this.competitionDataBase.getCompetitionById(id)
            if (!competitionDb) {
                throw new Error("Não existe competição com esse id")
            }
            await this.competitionDataBase.updateCompetition(id)
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}