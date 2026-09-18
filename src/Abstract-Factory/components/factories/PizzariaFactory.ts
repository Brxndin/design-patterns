import { Pizza } from "../Pizza";
import { Sorvete } from "../Sorvete";
import { Suco } from "../Suco";
import { Bebida } from "../../interfaces/Bebida";
import { ProdutoPrincipal } from "../../interfaces/ProdutoPrincipal";
import { RestauranteFactory } from "../../interfaces/RestauranteFactory";
import { Sobremesa } from "../../interfaces/Sobremesa";

export class PizzariaFactory implements RestauranteFactory {
    criarProdutoPrincipal(): ProdutoPrincipal {
        return new Pizza();
    }

    criarBebida(): Bebida {
        return new Suco();
    }

    criarSobremesa(): Sobremesa {
        return new Sorvete();
    }
}
