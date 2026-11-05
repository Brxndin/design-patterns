import { Pedido } from '../components/Pedido';

export interface PedidoState {
    pagar(pedido: Pedido): void;
    cancelar(pedido: Pedido): void;
    enviar(pedido: Pedido): void;
    concluirEntrega(pedido: Pedido): void;
}
