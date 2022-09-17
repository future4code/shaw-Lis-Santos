import { COMPETITION } from "../model/Competition"
import { getResultByIdCompetition, Plays } from "../model/Plays"
import { BaseDatabase } from "./BaseDatabase"

export class PlayDataBase extends BaseDatabase {
    protected TABLE_NAME = 'plays'
    protected TABLE_NAME2 = 'athlete'
    protected TABLE_NAME3 = 'competition'

    insertPlay = async (play: Plays) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(play)
                return "Resultado cadastrado com sucesso!"
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectResultByIdCompetition = async (id_competition: string) => {
        try {
            const [result]: getResultByIdCompetition[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ id_competition: id_competition })
                .join(this.TABLE_NAME3, "plays.id_competition", "competition.id")
            if (result.name === COMPETITION.DARDO) {
                const result: getResultByIdCompetition[] = await BaseDatabase.connection(this.TABLE_NAME)
                    .select("name", "unity") 
                    .max('value as value' ) 
                    .where({ id_competition: id_competition })
                    .join(this.TABLE_NAME2, "plays.id_athlete", "athlete.id")
                    .orderBy("value", "desc")
                    .orderBy("name", "asc")
                    .groupBy("name", "unity")
                return result
            } else if (result.name === COMPETITION._100M) {
                const result: getResultByIdCompetition[] = await BaseDatabase.connection(this.TABLE_NAME)
                    .select("athlete.name", "plaslays.value", "plays.unity")
                    .where({ id_competition: id_competition })
                    .join(this.TABLE_NAME2, "plays.id_athlete", "athlete.id")
                    .orderBy("value")
                return result
            }
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}