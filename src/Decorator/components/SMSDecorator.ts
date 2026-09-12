import { Notificador } from "../interfaces/Notificador";
import { NotificadorDecorator } from "./base/NotificadorDecorator";

export class SMSDecorator extends NotificadorDecorator {
    constructor(notificador: Notificador) {
        super(notificador);
    }

    enviar(mensagem: string): void {
        super.enviar(mensagem);

        console.log(`[SMS] Enviando: "${mensagem}"`);
    }
}
