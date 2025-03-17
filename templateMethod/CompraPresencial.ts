import { AbstractCompra } from "./AbstractCompra.ts";

export class CompraPresencial extends AbstractCompra {

    public aplicarDesconto(): void {
        this.valorProcesado = this.valor - (this.valor * (this.qtdProdutos/200));
    }
}