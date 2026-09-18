import { Bebida } from "../interfaces/Bebida";

export class Refrigerante implements Bebida {
    servir(): void {
        console.log('Refrigerante criado.')
    }
}
