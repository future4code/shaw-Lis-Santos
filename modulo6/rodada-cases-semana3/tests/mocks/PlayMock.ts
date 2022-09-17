import { Plays, PlaysDTO } from "../../src/model/Plays"
import { UNITY } from "../../src/model/Plays"

export const play1 = new Plays(
    "id_play1",
    "id_competition1",
    "id_athlete1",
    [100.67],
    UNITY.m
)

export const play2 = new Plays(
    "id_play2",
    "id_competition2",
    "id_athlete2",
    [20],
    UNITY.s
)

export const PlaySuccessDTO: PlaysDTO = {
    id_competition: "id_mock",
    id_athlete: "id_athlete",
    value: [11],
    unity: UNITY.s
}

export const PlayFailure: PlaysDTO = {
    id_competition: "id_mock",
    id_athlete: "id_athlete",
    value: [111, 113.1, 109.9],
    unity: UNITY.m
}