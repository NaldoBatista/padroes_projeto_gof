import { CompraOnline } from "./CompraOnline.ts";
import { CompraPresencial } from "./CompraPresencial.ts";

class Cliente {
    public testarTemplateMethod(): void {
        const compraOnline = new CompraOnline(10, 500);
        console.log("Valor compra online: " + compraOnline.processarValorTotalCompra());

        const compraPresencial = new CompraPresencial(10, 500);
        console.log("Valor compra presencial: " + compraPresencial.processarValorTotalCompra());
    }
}

const cliente = new Cliente();
cliente.testarTemplateMethod();