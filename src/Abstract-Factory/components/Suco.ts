import { Bebida } from "../interfaces/Bebida";

export class Suco implements Bebida {
    servir(): void {
        console.log('Suco criado.')
    }
}
