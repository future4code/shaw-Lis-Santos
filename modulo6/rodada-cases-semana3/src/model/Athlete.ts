export class Athlete {
    constructor(
        private id: string,
        private name: string
    ) { }
    getId() {
        return this.id
    }
}

export type AthleteDTO = {
    name: string
}