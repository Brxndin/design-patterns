import { ItemPedido } from "../interfaces/ItemPedido";

export class Pedido {
    public id: string;
    public itens: ItemPedido[];
    public destinatario: string;

    constructor(id: string, itens: ItemPedido[], destinatario: string) {
        this.id = id;
        this.itens = itens;
        this.destinatario = destinatario;
    }
}
