import { ProdutoAbstract } from "./ProdutoAbstract.ts";

export class Produto extends ProdutoAbstract {
    
    private valor: number;

    constructor(valor: number) {
        super();
        this.valor = valor;
    }

    public getValor(): number {
        return this.valor;
    }
}