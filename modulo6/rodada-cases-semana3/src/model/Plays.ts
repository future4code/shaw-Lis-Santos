export enum UNITY {
    s = "s",
    m = "m"
}

export class Plays {
    constructor(
        private id: string,
        private id_competition: string,
        private id_athlete: string,
        private value: number | number[],
        private unity: string
    ) { }
}

export type PlaysDTO = {
    id_competition: string,
    id_athlete: string,
    value: number[],
    unity: UNITY
}

export interface getResultByIdCompetition {
    id: string
    name: string,
    value: number,
    unity: UNITY
}