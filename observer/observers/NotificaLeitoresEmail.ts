import { Noticiario } from "../subject/Noticiario.ts";
import { type iObserver } from "./iObserver.ts";

export class NotificaLeitoresEmail implements iObserver {

    public update(noticiario: Noticiario): void {
        for (let assinante = 1; assinante <= noticiario.getQtdAssinantes; assinante++) {
            console.log(`E-mail enviado para o assinante ${assinante}.`);
        }
    }
}