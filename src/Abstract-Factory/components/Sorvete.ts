import { Sobremesa } from "../interfaces/Sobremesa";

export class Sorvete implements Sobremesa {
    preparar(): void {
        console.log('Sorvete criado.')
    }
}
