export class Athlete {
    constructor(
        private id: string,
        private name: string
    ) { }
}

export type AthleteDTO = {
    name: string
}