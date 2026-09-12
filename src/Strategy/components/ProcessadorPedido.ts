import { Pedido } from "./Pedido";
import { Desconto } from "../interfaces/Desconto";
import { Notificacao } from "../interfaces/Notificacao";
import { Pagamento } from "../interfaces/Pagamento";

export class ProcessadorPedido {
    constructor(
        private descontoStrategy: Desconto,
        private pagamentoStrategy: Pagamento,
        private notificacaoStrategy: Notificacao 
    ) {}

    public setDescontoStrategy(strategy: Desconto): void {
        this.descontoStrategy = strategy;
    }
    
    public setPagamentoStrategy(strategy: Pagamento): void {
        this.pagamentoStrategy = strategy;
    }

    public setNotificacaoStrategy(strategy: Notificacao): void {
        this.notificacaoStrategy = strategy;
    }
    
    public finalizarPedido(pedido: Pedido): void {
        let valorTotal = 0;

        for (const item of pedido.itens) {
            valorTotal += item.preco * item.quantidade;
        }

        console.log(`\n==================================================`);
        console.log(`INICIANDO CHECKOUT - PEDIDO ${pedido.id}`);
        console.log(`Valor Original: R$ ${valorTotal.toFixed(2)}`);

        const desconto = this.descontoStrategy.calcularDesconto(pedido);
        const valorComDesconto = valorTotal - desconto;
        console.log(`Desconto Aplicado: R$ ${desconto.toFixed(2)} -> Total Final: R$ ${valorComDesconto.toFixed(2)}`);

        const pagamentoSucesso = this.pagamentoStrategy.processarPagamento(valorComDesconto);

        if (pagamentoSucesso) {
            const msg = `Seu pedido ${pedido.id} foi pago com sucesso no valor final de R$ ${valorComDesconto.toFixed(2)}!`;
            this.notificacaoStrategy.enviarNotificacao(msg, pedido.destinatario);
        }

        console.log(`==================================================\n`);
    }
}
