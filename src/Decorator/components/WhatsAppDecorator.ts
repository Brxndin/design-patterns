import { Notificador } from "../interfaces/Notificador";
import { NotificadorDecorator } from "./base/NotificadorDecorator";

export class WhatsAppDecorator extends NotificadorDecorator {
    constructor(notificador: Notificador) {
        super(notificador);
    }

    enviar(mensagem: string): void {
        super.enviar(mensagem);

        console.log(`[WhatsApp] Enviando: "${mensagem}"`);
    }
}
