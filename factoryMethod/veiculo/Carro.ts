import { AbstractVeiculo } from "./base/AbstractVeiculo.ts";
import { type iVeiculo } from "./base/iVeiculo.ts";

export class Carro extends AbstractVeiculo implements iVeiculo {

    public andar(): string {
        return this._ligado 
            ? "O carro está andando."
            : "Ligue o carro para pode andar!"; 
    }
}