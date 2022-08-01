import app from "./app"
import { CompetitionBusiness } from "./business/CompetitionBusiness"
import { ResultBusiness } from "./business/ResultBusiness"
import { CompetitionController } from "./controller/CompetitionController"
import { ResultController } from "./controller/ResultController"
import { CompetitionDatabase } from "./data/CompetitionDatabase"
import { ResultDatabase } from "./data/ResultDatabase"
import { IdGenerator } from "./services/IdGenerator"

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase,
        new IdGenerator
    )
)

const resultController = new ResultController(
    new ResultBusiness(
        new ResultDatabase
    )
)

app.post("/competition", competitionController.createCompetition)
app.post("/result/:competicao_id", resultController.registerResult)
app.put("/competition/:id", competitionController.putCompetitionById)