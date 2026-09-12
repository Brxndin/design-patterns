import { Observer } from "../interfaces/Observer"

export class EmailService implements Observer {
    constructor(private email: string) {}

    update(message: string): void {
        console.log(`Enviando e-mail para ${this.email}: ${message}`)
    }
}
