import { PedidoState } from '../../interfaces/PedidoState';
import { Pedido } from '../Pedido';
import { CanceladoState } from './CanceladoState';
import { PagoState } from './PagoState';

export class AguardandoPagamentoState implements PedidoState {
    pagar(pedido: Pedido) {
        console.log('Pagamento do pedido realizado.');

        pedido.changeState(new PagoState());
    }

    cancelar(pedido: Pedido) {
        console.log('Pedido cancelado com sucesso.');

        pedido.changeState(new CanceladoState());
    }

    enviar(pedido: Pedido) {
        console.log('Não é possível enviar um pedido que aguarda pagamento.');
    }

    concluirEntrega(pedido: Pedido) {
        console.log('Não é possível entregar um pedido que aguarda pagamento.');
    }
}
