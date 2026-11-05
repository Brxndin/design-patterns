import { PedidoState } from '../../interfaces/PedidoState';
import { Pedido } from '../Pedido';

export class EntregueState implements PedidoState {
    pagar(pedido: Pedido) {
        console.log('O pedido já foi pago e entregue.');
    }

    cancelar(pedido: Pedido) {
        console.log('O pedido já foi entregue e não é possível cancelar.');
    }

    enviar(pedido: Pedido) {
        console.log('O pedido já foi entregue e não é possível enviar.');
    }

    concluirEntrega(pedido: Pedido) {
        console.log('O pedido já foi entregue.');
    }
}
