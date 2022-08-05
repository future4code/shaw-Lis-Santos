import app from "./app"
import { AthleteBusiness } from "./business/AthleteBusiness"
import { CompetitionBusiness } from "./business/CompetitionBusiness"
import { PlayBusiness } from "./business/PlayBusiness"
import { AthleteController } from "./controller/AthleteController"
import { CompetitionController } from "./controller/CompetitionController"
import { PlayController } from "./controller/PlayController"
import { AthleteDatabase } from "./data/AthleteDatabase"
import { CompetitionDatabase } from "./data/CompetitionDatabase"
import { PlayDataBase } from "./data/PlayBaseDatabase"
import { IdGenerator } from "./services/IdGenerator"

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase,
        new IdGenerator
    )
)

const athleteController = new AthleteController(
    new AthleteBusiness(
        new AthleteDatabase,
        new IdGenerator
    )
)

const playController = new PlayController(
    new PlayBusiness(
        new PlayDataBase,
        new IdGenerator,
        new CompetitionDatabase
    )
)
app.get("/athletes", athleteController.getAllAthletes)
app.get("/competitions", competitionController.getAllCompetitions)
app.get("/:id_competition", playController.getResultByIdCompetition)
app.post("/competition", competitionController.createCompetition)
app.post("/athlete", athleteController.createAthlete)
app.post("/play/:id_competition/:id_athlete", playController.createPlay)
app.put("/competition/:id", competitionController.putCompetitionById)