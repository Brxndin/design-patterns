import { Notificacao } from "../interfaces/Notificacao";

export class NotificacaoSMSStrategy implements Notificacao {
    public enviarNotificacao(nome: string, destinatario: string): void {
        console.log(`Enviado por SMS para ${nome}`);
    }
}
