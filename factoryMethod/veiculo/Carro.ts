import { AbstractVeiculo } from "./AbstractVeiculo.ts";
import { type iVeiculo } from "./iVeiculo.ts";

export class Carro extends AbstractVeiculo implements iVeiculo {

    public andar(): string {
        return this._ligado 
            ? "O carro está andando."
            : "Ligue o carro para pode andar!"; 
    }
}