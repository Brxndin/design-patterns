import { Notificacao } from "../interfaces/Notificacao";

export class NotificacaoPush implements Notificacao {
    enviar(mensagem: string, destinatario: string): void {
        console.log(`[PUSH] para ${destinatario}: ${mensagem}`);
    }
}
