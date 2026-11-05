import { PedidoState } from '../interfaces/PedidoState';
import { AguardandoPagamentoState } from './states/AguardandoPagamentoState';

export class Pedido {
    private currentState: PedidoState;

    constructor() {
        this.currentState = new AguardandoPagamentoState();
    }

    public changeState(state: PedidoState): void {
        this.currentState = state;
    }

    public pagar(): void {
        this.currentState.pagar(this);
    }

    public cancelar(): void {
        this.currentState.cancelar(this);
    }

    public enviar(): void {
        this.currentState.enviar(this);
    }

    public concluirEntrega(): void {
        this.currentState.concluirEntrega(this);
    }
}
