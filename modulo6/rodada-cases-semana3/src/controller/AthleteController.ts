import { Request, Response } from "express";
import { AthleteBusiness } from "../business/AthleteBusiness";
import { AthleteDTO } from "../model/Athlete";

export class AthleteController {
    constructor(
       private athleteBusiness: AthleteBusiness
    ) { }
    createAthlete = async (req: Request, res: Response) => {
        try {
            const { name } = req.body

            const input: AthleteDTO = {
                name
            }
            await this.athleteBusiness.createAthlete(input)
            res.status(201).send({message: "Atleta criado com sucesso!"})
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
}