export abstract class ProdutoAbstract {
    
    protected parent: ProdutoAbstract | null;

    set setParent(parent: ProdutoAbstract | null) {
        this.parent = parent;
    }

    get getParent(): ProdutoAbstract | null {
        return this.parent;
    }

    public add(produto: ProdutoAbstract): void {}

    public remove(produto: ProdutoAbstract): void {}

    public isComposite(): boolean {
        return false;
    }

    abstract getValor(): number;
}