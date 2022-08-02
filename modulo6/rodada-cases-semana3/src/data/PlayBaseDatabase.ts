import { COMPETITION } from "../model/Competition";
import { getResultByIdCompetition, Plays } from "../model/Plays";
import { BaseDatabase } from "./BaseDatabase";

export class PlayDataBase extends BaseDatabase {
    protected TABLE_NAME = 'plays'
    protected TABLE_NAME2 = 'athlete'
    protected TABLE_NAME3 = 'competicao'

    insertPlay = async (play: Plays) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(play)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getResultByIdCompetition = async (id_competition: string) => {
        console.log(id_competition)
        try {
            const [result]: getResultByIdCompetition[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({ id_competition: id_competition })
                .join(this.TABLE_NAME3, "plays.id_competition", "competicao.id")
            console.log(result)
            if (result.name === COMPETITION.DARDO) {
                const result: getResultByIdCompetition[] = await BaseDatabase.connection(this.TABLE_NAME)
                    .select("plays.id", "athlete.name", "plays.value", "plays.unity")
                    .where({ id_competition: id_competition })
                    .join(this.TABLE_NAME2, "plays.id_athlete", "athlete.id")
                    .orderBy("value", "desc")
                console.log(result)
                return result
            } else if (result.name === COMPETITION._100M) {
                const result: getResultByIdCompetition[] = await BaseDatabase.connection(this.TABLE_NAME)
                    .select("plays.id", "athlete.name", "plays.value", "plays.unity")
                    .where({ id_competition: id_competition })
                    .join(this.TABLE_NAME2, "plays.id_athlete", "athlete.id")
                    .orderBy("plays.value")
                return result
            }
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}