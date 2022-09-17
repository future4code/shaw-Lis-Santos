import { Athlete } from "../model/Athlete";
import { BaseDatabase } from "./BaseDatabase";

export class AthleteDatabase extends BaseDatabase {
    protected TABLE_NAME = 'athlete'

    insertAthlete = async (athlete: Athlete) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(athlete)
            return "Atleta adicionado com sucesso!"
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getAllAthletes = async (): Promise<Athlete[]> => {
        try {
            const result: Athlete[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}