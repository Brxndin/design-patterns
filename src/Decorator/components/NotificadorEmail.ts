import { Notificador } from "../interfaces/Notificador";

export class NotificadorEmail implements Notificador {
    enviar(mensagem: string): void {
        console.log(`[E-mail] Enviando: "${mensagem}"`);
    }
}
