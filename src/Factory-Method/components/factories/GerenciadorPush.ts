import { Notificacao } from "../../interfaces/Notificacao";
import { GerenciadorNotificacao } from "../base/GerenciadorNotificacao";
import { NotificacaoPush } from "../NotificacaoPush";

export class GerenciadorPush extends GerenciadorNotificacao {
    criarNotificacao(): Notificacao {
        return new NotificacaoPush();
    }
}
