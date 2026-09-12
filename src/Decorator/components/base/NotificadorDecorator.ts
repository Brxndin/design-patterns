import { Notificador } from "../../interfaces/Notificador";

export abstract class NotificadorDecorator implements Notificador {
    protected notificador: Notificador;

    constructor(notificador: Notificador) {
        this.notificador = notificador;
    }

    enviar(mensagem: string): void {
        this.notificador.enviar(mensagem);
    }
}
