export abstract class AbstractCompra {
    protected qtdProdutos: number;
    protected valor: number;
    protected valorProcesado: number;
    
    constructor(qtdProdutos: number, valor: number) {
        this.qtdProdutos = qtdProdutos;
        this.valor = valor;
    }
    
    public processarValorTotalCompra(): number {
        this.aplicarDesconto();
        this.aplicarFrete();
        return this.valorProcesado;
    }

    public abstract aplicarDesconto(): void;

    public aplicarFrete(): void {}
}