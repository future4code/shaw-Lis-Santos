import { AthleteDatabase } from "../data/AthleteDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { Athlete, AthleteDTO } from "../model/Athlete"
import { CustomError } from "../error/CustomError"
export class AthleteBusiness {
    constructor(
        private athleteDataBase: AthleteDatabase,
        private idGenerator: IdGenerator
    ) { }
    createAthlete = async (input: AthleteDTO) => {
        const { name } = input

        try {
            if (!name) {
                throw new CustomError(422, "Insira corretamente a informação de 'name'")
            }
            if(typeof name !== "string") {
                throw new CustomError(422, "O campo name deve ser do tipo string")
            }

            const id = this.idGenerator.generateId()
            const athlete = new Athlete(
                id,
                name
            )
            const result = await this.athleteDataBase.insertAthlete(athlete)
            return result
        } catch (error: any) {
            throw new CustomError(500, error.slqMessage || error.message)
        }
    }
    getAllAthletes = async (): Promise<Athlete[]> => {
        try {
            const result = await this.athleteDataBase.getAllAthletes()
            if (result.length === 0) {
                throw new CustomError(422, "Ainda não tem atleta cadastrado!")
            }
            return result
        } catch (error: any) {
            throw new CustomError(500, error.slqMessage || error.message)
        }
    }
}