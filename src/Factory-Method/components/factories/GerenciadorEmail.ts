import { Notificacao } from "../../interfaces/Notificacao";
import { GerenciadorNotificacao } from "../base/GerenciadorNotificacao";
import { NotificacaoEmail } from "../NotificacaoEmail";

export class GerenciadorEmail extends GerenciadorNotificacao {
    criarNotificacao(): Notificacao {
        return new NotificacaoEmail();
    }
}
