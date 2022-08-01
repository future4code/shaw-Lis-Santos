export enum STATUS {
    FINALIZADA = "FINALIZADA",
    ACONTECENDO_AGORA = "ACONTECENDO AGORA",
    NÃO_INICIALIZADA = "NÃO INICIALIZADA"
}

export enum COMPETITION {
    PRIMEIRA_CLASSIFICATÓRIA_100M = "100m classificatória1",
    SEGUNDA_CLASSIFICATÓRIA_100M = "100m classificatória2",
    QUARTAS_FINAL_100M = "100m quartas de final",
    SEMIFINAL_100M = "100m semifinal",
    FINAL_100M = "100m final",
    PRIMEIRA_CLASSIFICATÓRIA_DARDO = "Lançamento de Dardo classificatória1",
    SEGUNDA_CLASSIFICATÓRIA_DARDO = "Lançamento de Dardo classificatória2",
    QUARTAS_FINAL_DARDO = "Lançamento de Dardo quartas de final",
    SEMIFINAL_DARDO = "Lançamento de Dardo semifinal",
    FINAL_DARDO = "Lançamento de Dardo final"
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