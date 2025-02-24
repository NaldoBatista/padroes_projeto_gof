import { ProdutoAbstract } from "./ProdutoAbstract.ts";

export class CaixaProdutos extends ProdutoAbstract {

    private produtos: ProdutoAbstract[] = [];

    public add(produto: ProdutoAbstract): void {
        this.produtos.push(produto);
    }

    public remove(produto: ProdutoAbstract): void {
        
    }

    public isComposite(): boolean {
        return true;
    }

    public getValor(): number {
        let valorTotal = 0;
        
        this.produtos.forEach(produto => {
            valorTotal += produto.getValor(); 
        });

        return valorTotal;
    }
}