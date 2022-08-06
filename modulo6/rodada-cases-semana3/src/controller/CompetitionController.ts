import { Request, Response } from "express"
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO } from "../model/Competition";

export class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ) { }

    createCompetition = async (req: Request, res: Response) => {
        try {
            const { name, status } = req.body

            const input: CompetitionDTO = {
                name,
                status
            }
            await this.competitionBusiness.createCompetition(input)
            res.status(201).send({ message: "Competição adicionada com sucesso!" })
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
    putCompetitionById = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const competitionId = await this.competitionBusiness.putCompetitionById(id)
            res.status(200).send(competitionId)
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    getAllCompetitions = async (req: Request, res: Response) => {
        try {
            const result = await this.competitionBusiness.getAllCompetitions()
            res.status(200).send(result)
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
}