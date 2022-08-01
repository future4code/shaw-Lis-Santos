import { STATUS } from "./Competition";

export enum UNIDADE {
    s = "s",
    m = "m"
}

export type ResultDTO = {
    competicao_id: string
    atleta: string
    value: string
    unidade: UNIDADE
}

export class Result {
    constructor(
        private competicao_id: string,
        private atleta: string,
        private value: string,
        private unidade: UNIDADE
    ) { }
}