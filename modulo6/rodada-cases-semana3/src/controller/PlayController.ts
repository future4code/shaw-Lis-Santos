import { Request, Response } from "express";
import { PlayBusiness } from "../business/PlayBusiness";
import { PlaysDTO } from "../model/Plays";

export class PlayController {
    constructor(
        private playBusiness: PlayBusiness
    ) { }

    createPlay = async (req: Request, res: Response) => {
        const { id_competition, id_athlete } = req.params
        const { value, unity } = req.body
        try {
            const input: PlaysDTO = {
                id_competition,
                id_athlete,
                value,
                unity
            }
            await this.playBusiness.createPlay(input)
            res.status(201).send({ message: "Resultado cadastrado com sucesso!" })
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
    getResultByIdCompetition = async (req: Request, res: Response) => {
        const { id_competition } = req.params
        try {
            const result = await this.playBusiness.getResultByCompetition(id_competition)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}