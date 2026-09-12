import { Pedido, STATUS } from "./components/Pedido";
import { EmailService } from "./services/EmailService";
import { InventoryService } from "./services/InventoryService";
import { LogService } from "./services/LogService";

const email = new EmailService('brand@email.com')
const estoque = new InventoryService()
const log = new LogService()

const pedido = new Pedido()

pedido.subscribe(email)
pedido.subscribe(estoque)
pedido.subscribe(log)

pedido.setStatus(STATUS.Criado)
console.log('-----------------')

pedido.setStatus(STATUS.Pago)
console.log('-----------------')

pedido.setStatus(STATUS.Enviado)
console.log('-----------------')

pedido.setStatus(STATUS.Cancelado)
console.log('-----------------')
