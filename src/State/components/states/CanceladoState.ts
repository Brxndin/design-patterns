import { PedidoState } from '../../interfaces/PedidoState';
import { Pedido } from '../Pedido';

export class CanceladoState implements PedidoState {
    pagar(pedido: Pedido) {
        console.log('O pedido foi cancelado e não é possível pagar.');
    }

    cancelar(pedido: Pedido) {
        console.log('O pedido já foi cancelado.');
    }

    enviar(pedido: Pedido) {
        console.log('O pedido foi cancelado e não é possível enviar.');
    }

    concluirEntrega(pedido: Pedido) {
        console.log('O pedido foi cancelado e não é possível entregar.');
    }
}
