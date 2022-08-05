import { Athlete, AthleteDTO } from "../../src/model/Athlete"

export const athlete1 = new Athlete(
    "id_athlete1",
    "João"
)

export const athlete2 = new Athlete(
    "id_athlete2",
    "Maria"
)

export const AthleteSuccessDTO: AthleteDTO = {
    name: "Jp"
}

export const AthleteFailureDTO: AthleteDTO = {
    name: ""
}