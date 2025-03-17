import { AbstractCompra } from "./AbstractCompra.ts";

export class CompraOnline extends AbstractCompra {

    public aplicarDesconto(): void {
        this.valorProcesado = this.valor - (this.valor * (this.qtdProdutos/100));
    }

    public aplicarFrete(): void {
        this.valorProcesado = this.valorProcesado + (this.qtdProdutos * 0.5);
    }
}