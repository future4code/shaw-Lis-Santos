export enum STATUS {
    FINALIZADA = "FINALIZADA",
    ACONTECENDO_AGORA = "ACONTECENDO AGORA",
    NÃO_INICIALIZADA = "NÃO INICIALIZADA"
}

export enum COMPETITION {
 _100M = "100m",
 DARDO = "Lançamento de dardo"
}

export type CompetitionDTO = {
    name: COMPETITION,
    status: STATUS
}

export class Competition {
    constructor(
        private id: string,
        private name: COMPETITION,
        private status: STATUS
    ) { }
}