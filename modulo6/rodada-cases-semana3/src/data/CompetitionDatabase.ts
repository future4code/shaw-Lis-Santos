import { Competition } from "../model/Competition";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {
    protected TABLE_NAME = 'competition'

    insertCompetition = async (competition: Competition) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(competition)
            return "Competição criada com sucesso!"
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getCompetitionById = async (id: string) => {
        try {
            const [result] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ id })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    updateCompetition = async (id: string) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .update({ status: "FINALIZADA" })
                .where({ id })
            return "Status modificado!"
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getAllCompetitions = async (): Promise<Competition[]> => {
        try {
            const result: Competition[] = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}