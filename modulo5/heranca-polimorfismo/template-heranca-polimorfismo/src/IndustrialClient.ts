import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private nire: number,
        getMachinesQuantity: number,
        cep: string
    ) {
        super(getMachinesQuantity, cep)
    }
    public getNire(): number {
        return this.nire
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0, 45 + this.machinesQuantity * 100
    }
}