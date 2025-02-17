import { type iVeiculo } from './iVeiculo.ts';

export abstract class AbstractVeiculo implements iVeiculo {

    protected _ligado: boolean;

    constructor (){
        this._ligado = false;
    }

    public ligar(): void {
        this._ligado = true;
    }

    public abstract andar(): string;
}