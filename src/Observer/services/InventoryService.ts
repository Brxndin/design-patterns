import { Observer } from "../interfaces/Observer";

export class InventoryService implements Observer {
    constructor() {}

    update(message: string): void {
        console.log(`Quantidade do produto diminuída no estoque.`)
    }
}
