import { Notificacao } from "../interfaces/Notificacao";

export class NotificacaoWhatsAppStrategy implements Notificacao {
    public enviarNotificacao(nome: string, destinatario: string): void {
        console.log(`Enviado por WhatsApp para ${nome}`);
    }
}
