import { Notificador } from "../interfaces/Notificador";
import { NotificadorDecorator } from "./base/NotificadorDecorator";

export class LogDecorator extends NotificadorDecorator {
    constructor(notificador: Notificador) {
        super(notificador);
    }

    enviar(mensagem: string): void {
        super.enviar(mensagem);

        const dataAtual = new Date().toLocaleString('pt-BR');

        console.log(`[LOG] Notificação registrada no sistema em ${dataAtual}`);
    }
}
