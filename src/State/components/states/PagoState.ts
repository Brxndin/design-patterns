import { PedidoState } from '../../interfaces/PedidoState';
import { Pedido } from '../Pedido';
import { CanceladoState } from './CanceladoState';
import { EnviadoState } from './EnviadoState';

export class PagoState implements PedidoState {
    pagar(pedido: Pedido) {
        console.log('O pedido já está pago.');
    }

    cancelar(pedido: Pedido) {
        console.log('Cancelamento do pedido realizado. O valor será reembolsado.');

        pedido.changeState(new CanceladoState());
    }

    enviar(pedido: Pedido) {
        console.log('Pedido enviado com sucesso.');

        pedido.changeState(new EnviadoState());
    }

    concluirEntrega(pedido: Pedido) {
        console.log('Não é possível entregar pois o pedido ainda não foi enviado.');
    }
}
