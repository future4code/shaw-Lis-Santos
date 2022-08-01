import { Competition } from "../model/Competition";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {
    protected TABLE_NAME = 'competicao'

    insertCompetition = async (competition: Competition) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(competition)
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
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}