import { Pagamento } from "../interfaces/Pagamento";

export class PagamentoCartaoCreditoStrategy implements Pagamento {
    public processarPagamento(valorTotal: number): boolean {
        console.log(`Chave PIX gerada: (54) 99999-9999. Valor sem taxas adicionais: ${valorTotal}`);

        return true;
    }
}
