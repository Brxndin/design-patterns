import { ProdutoPrincipal } from "../interfaces/ProdutoPrincipal";

export class Pizza implements ProdutoPrincipal {
    preparar(): void {
        console.log('Pizza criada.')
    }
}
