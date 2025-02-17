import { AbstractVeiculo } from "./AbstractVeiculo.ts";
import { type iVeiculo } from "./iVeiculo.ts";

export class Moto extends AbstractVeiculo implements iVeiculo {
    
    public andar(): string {
        return this._ligado 
            ? "A moto está andando."
            : "Ligue a moto para poder andar!";    
    }
}