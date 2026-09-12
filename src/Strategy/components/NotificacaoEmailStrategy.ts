import { Notificacao } from "../interfaces/Notificacao";

export class NotificacaoEmailStrategy implements Notificacao {
    public enviarNotificacao(nome: string, destinatario: string): void {
        console.log(`Enviado por e-mail para ${nome}`);
    }
}
