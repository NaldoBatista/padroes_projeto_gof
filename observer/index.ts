import { NotificaLeitoresEmail } from "./observers/NotificaLeitoresEmail.ts";
import { NotificaLeitoresWhatsapp } from "./observers/NotificaLeitoresWhatsapp.ts";
import { Noticiario } from "./subject/Noticiario.ts";

class Cliente {

    testarObserver() {
        const notificaLeitoresEmail = new NotificaLeitoresEmail();
        const notificaLeitoresWhatsapp = new NotificaLeitoresWhatsapp();

        const noticiario = new Noticiario();
        noticiario.setQtdAssinantes = 5;
        noticiario.attachObserver(notificaLeitoresEmail);
        noticiario.attachObserver(notificaLeitoresWhatsapp);
        noticiario.publicarNoticia();
    }
}

const cliente = new Cliente();
cliente.testarObserver();