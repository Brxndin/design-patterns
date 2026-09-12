import { Pagamento } from "../interfaces/Pagamento";

export class PagamentoBoletoStrategy implements Pagamento {
    public processarPagamento(valorTotal: number): boolean {
        let novoValor = valorTotal + 2.5;
        
        console.log(`Novo valor com R$2,50 de taxa: ${novoValor}`);

        return true;
    }
}
