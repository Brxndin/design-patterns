import { Desconto } from "../interfaces/Desconto";
import { Pedido } from "./Pedido";

export class DescontoPorQuantidadeStrategy implements Desconto {
    public calcularDesconto(pedido: Pedido): number {
        let totalPedido = 0;
        let quantidadeItens = 0;

        for (const item of pedido.itens) {
            totalPedido += item.preco * item.quantidade;
            quantidadeItens += item.quantidade;
        }

        if (quantidadeItens > 5) {
            return totalPedido * 0.10;
        }

        return 0;
    }
}
