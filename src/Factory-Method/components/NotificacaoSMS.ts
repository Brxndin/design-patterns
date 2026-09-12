import { Notificacao } from "../interfaces/Notificacao";

export class NotificacaoSMS implements Notificacao {
    enviar(mensagem: string, destinatario: string): void {
        console.log(`[SMS] para ${destinatario}: ${mensagem}`);
    }
}
