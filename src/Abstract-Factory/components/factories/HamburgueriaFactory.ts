import { Hamburguer } from "../Hamburguer";
import { MilkShake } from "../MilkShake";
import { Refrigerante } from "../Refrigerante";
import { Bebida } from "../../interfaces/Bebida";
import { ProdutoPrincipal } from "../../interfaces/ProdutoPrincipal";
import { RestauranteFactory } from "../../interfaces/RestauranteFactory";
import { Sobremesa } from "../../interfaces/Sobremesa";

export class HamburgueriaFactory implements RestauranteFactory {
    criarProdutoPrincipal(): ProdutoPrincipal {
        return new Hamburguer();
    }

    criarBebida(): Bebida {
        return new Refrigerante();
    }

    criarSobremesa(): Sobremesa {
        return new MilkShake();
    }
}
