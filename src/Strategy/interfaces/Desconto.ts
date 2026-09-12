import { Pedido } from "../components/Pedido";

export interface Desconto {
    calcularDesconto(pedido: Pedido): number
}
