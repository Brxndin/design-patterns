import { Notificacao } from "../../interfaces/Notificacao";

export abstract class GerenciadorNotificacao {
    abstract criarNotificacao(): Notificacao;

    notificar(mensagem: string, destinatario: string): void {
        const notificacao: Notificacao = this.criarNotificacao();

        notificacao.enviar(mensagem, destinatario);
    }
}
