import { ProdutoPrincipal } from "../interfaces/ProdutoPrincipal";

export class Hamburguer implements ProdutoPrincipal {
    preparar(): void {
        console.log('Hamburguer criado.')
    }
}
