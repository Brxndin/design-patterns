import { PedidoState } from '../../interfaces/PedidoState';
import { Pedido } from '../Pedido';
import { EntregueState } from './EntregueState';

export class EnviadoState implements PedidoState {
    pagar(pedido: Pedido) {
        console.log('O pedido ja está pago.');
    }

    cancelar(pedido: Pedido) {
        console.log('O pedido já está em trânsito e não é possível cancelar.');
    }

    enviar(pedido: Pedido) {
        console.log('O pedido já foi enviado e está em trânsito.');
    }

    concluirEntrega(pedido: Pedido) {
        console.log('Pedido entregue com sucesso.');

        pedido.changeState(new EntregueState());
    }
}
