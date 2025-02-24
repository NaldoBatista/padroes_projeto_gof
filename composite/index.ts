import { CaixaProdutos } from "./produto/CaixaProdutos.ts";
import { Produto } from "./produto/Produto.ts";

class Cliente {
    
    public testarComposite() {
        const caixaPresente1 = new CaixaProdutos();
        caixaPresente1.add(new Produto(200));
        caixaPresente1.add(new Produto(12.22));
        console.log(caixaPresente1.getValor());

        const caixaPresente2 = new CaixaProdutos();
        caixaPresente2.add(new Produto(12.44));
        caixaPresente2.add(new Produto(150.99));
        console.log(caixaPresente2.getValor());

        const caixaMaior = new CaixaProdutos();
        caixaMaior.add(caixaPresente1);
        caixaMaior.add(caixaPresente2);
        console.log(caixaMaior.getValor());
    }
}

const cliente = new Cliente();
cliente.testarComposite();