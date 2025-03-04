import { SubjectAbstract } from "./SubjectAbstract.ts";

export class Noticiario extends SubjectAbstract{
    
    private qtdAssinantes: number;

    set setQtdAssinantes(qtdAssinantes: number) {
        this.qtdAssinantes = qtdAssinantes;
    }

    get getQtdAssinantes(): number {
        return this.qtdAssinantes;
    }

    public publicarNoticia(): void {
        console.log("Uma nova notícia foi publicada.");
        this.notify(this);
    }
}