import { HamburgueriaFactory } from "./components/factories/HamburgueriaFactory";
import { PizzariaFactory } from "./components/factories/PizzariaFactory";
import { Bebida } from "./interfaces/Bebida";
import { ProdutoPrincipal } from "./interfaces/ProdutoPrincipal";
import { RestauranteFactory } from "./interfaces/RestauranteFactory";
import { Sobremesa } from "./interfaces/Sobremesa";

export class Aplicacao {
    private produtoPrincipal: ProdutoPrincipal;
    private bebida: Bebida;
    private sobremesa: Sobremesa;

    constructor(factory: RestauranteFactory) {
        this.produtoPrincipal = factory.criarProdutoPrincipal();
        this.bebida = factory.criarBebida();
        this.sobremesa = factory.criarSobremesa();
    }

    servirPedido() {
        this.produtoPrincipal.preparar();
        this.bebida.servir();
        this.sobremesa.preparar();
    }
}

let factory: RestauranteFactory;

console.log('Teste Pizzaria:');

factory = new PizzariaFactory();

let app = new Aplicacao(factory);
app.servirPedido();

console.log('');

console.log('Teste Hamburgueria:');

factory = new HamburgueriaFactory();

app = new Aplicacao(factory);
app.servirPedido();
