import { Observer } from "../interfaces/Observer"
import { InventoryService } from "../services/InventoryService"

export enum STATUS {
    Criado = 'Criado',
    Pago = 'Pago',
    Enviado = 'Enviado',
    Cancelado = 'Cancelado',
}

export class Pedido {
    private observers: Observer[] = []
    private status: STATUS = STATUS.Criado

    subscribe(observer: Observer): void {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer)
    }

    notify(message: string): void {
        this.observers.forEach((o) => {
            // aqui só notifica o estoque se o pedido foi pago
            if (o instanceof InventoryService) {
                if (this.status === STATUS.Pago) {
                    o.update(message)
                }
            } else {
                o.update(message)
            }
        })
    }

    setStatus(status: STATUS): void {
        this.status = status;

        this.notify(`Produto ${status}`)
    }
}
