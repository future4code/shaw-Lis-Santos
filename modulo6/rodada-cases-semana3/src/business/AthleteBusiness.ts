import { AthleteDatabase } from "../data/AthleteDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { Athlete, AthleteDTO } from "../model/Athlete"
export class AthleteBusiness {
    constructor(
        private athleteDataBase: AthleteDatabase,
        private idGenerator: IdGenerator
    ) { }
    createAthlete = async (input: AthleteDTO) => {
        const { name } = input

        try {
            if (!name) {
                throw new Error("Insira corretamente a informação de 'name'")
            }

            const id = this.idGenerator.generateId()
            const athlete = new Athlete(
                id,
                name
            )
            const result = await this.athleteDataBase.insertAthlete(athlete)
            return result
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
    getAllAthletes = async ():Promise<Athlete[]> => {
        try {
            return await this.athleteDataBase.getAllAthletes()
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}