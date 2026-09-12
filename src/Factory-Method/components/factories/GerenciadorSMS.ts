import { Notificacao } from "../../interfaces/Notificacao";
import { GerenciadorNotificacao } from "../base/GerenciadorNotificacao";
import { NotificacaoSMS } from "../NotificacaoSMS";

export class GerenciadorSMS extends GerenciadorNotificacao {
    criarNotificacao(): Notificacao {
        return new NotificacaoSMS();
    }
}
