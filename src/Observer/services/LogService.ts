import { Observer } from "../interfaces/Observer";

export class LogService implements Observer {
    update(): void {
        const agora = new Date();

        console.log(`Produto atualizado em ${agora.toLocaleDateString('pt-BR', { dateStyle: 'full' })}, ${agora.toLocaleTimeString('pt-BR')}`)
    }
}
