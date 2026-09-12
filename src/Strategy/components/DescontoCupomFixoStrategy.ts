import { Desconto } from "../interfaces/Desconto";
import { Pedido } from "./Pedido";

export class DescontoCupomFixoStrategy implements Desconto {
    public calcularDesconto(pedido: Pedido): number {
        // mantive o valor fixo aqui pois, seguindo a interface Desconto, não tem como passar o valor pela função
        let valorFixo = 20;
        let totalPedido = 0;

        for (const item of pedido.itens) {
            totalPedido += item.preco * item.quantidade;
        }

        if (totalPedido - valorFixo >= 0) {
            return valorFixo;
        }

        return totalPedido;
    }
}
