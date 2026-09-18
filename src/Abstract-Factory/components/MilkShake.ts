import { Sobremesa } from "../interfaces/Sobremesa";

export class MilkShake implements Sobremesa {
    preparar(): void {
        console.log('MilkShake criado.')
    }
}
