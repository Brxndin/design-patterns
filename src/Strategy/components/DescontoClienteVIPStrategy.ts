import { Desconto } from "../interfaces/Desconto";
import { Pedido } from "./Pedido";

export class DescontoClienteVIPStrategy implements Desconto {
    public calcularDesconto(pedido: Pedido): number {
        let totalPedido = 0;

        for (const item of pedido.itens) {
            totalPedido += item.preco * item.quantidade;
        }

        return totalPedido * 0.15;
    }
}
