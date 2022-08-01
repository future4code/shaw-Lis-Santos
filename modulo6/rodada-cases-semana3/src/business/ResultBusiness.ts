import { ResultDatabase } from "../data/ResultDatabase"
import { Result, ResultDTO } from "../model/Result"
import { STATUS } from "../model/Competition"

export class ResultBusiness {
    constructor(
        private resultDatabase: ResultDatabase
    ) { }

    registerResult = async (input: ResultDTO) => {
        const { competicao_id, atleta, value, unidade, status } = input
        try {
            if (!competicao_id || !atleta || !value || !unidade) {
                throw new Error("Insira corretamente a informação de 'atleta', 'value' e 'unidade'")
            }
            if (status === STATUS.FINALIZADA) {
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
            throw new error(error.slqMessage || error.message)
        }
    }
}