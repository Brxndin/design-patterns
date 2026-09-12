import { Pagamento } from "../interfaces/Pagamento";

export class PagamentoPixStrategy implements Pagamento {
    public processarPagamento(valorTotal: number): boolean {
        let novoValor = valorTotal + (valorTotal * 0.025);
        
        console.log(`Novo valor com 2,5% de taxa: ${novoValor}`);

        return true;
    }
}
