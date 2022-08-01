import { ResultDatabase } from "../data/ResultDatabase"
import { Result, ResultDTO } from "../model/Result"
import { STATUS } from "../model/Competition"
import { CompetitionDatabase } from "../data/CompetitionDatabase"

export class ResultBusiness {
    constructor(
        private resultDatabase: ResultDatabase,
        private competitionDatabase: CompetitionDatabase
    ) { }

    registerResult = async (input: ResultDTO) => {
        const { competicao_id, atleta, value, unidade} = input
        try {
            if (!competicao_id || !atleta || !value || !unidade) {
                throw new Error("Insira corretamente a informação de 'atleta', 'value' e 'unidade'")
            }
            const competicao = await this.competitionDatabase.getCompetitionById(competicao_id)
            if (competicao.status === STATUS.FINALIZADA) {
                throw new Error("Não é possível aceitar cadastros de uma competição já finalizada")
            }
            const result = new Result(
                competicao_id,
                atleta,
                value,
                unidade
            )
            await this.resultDatabase.insertResult(result)
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}