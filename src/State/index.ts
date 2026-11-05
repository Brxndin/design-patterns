import { Pedido } from "./components/Pedido";

const pedido = new Pedido();

console.log('Teste 1 -> ações inválidas no status Aguardando Pagamento:');

pedido.enviar();
pedido.concluirEntrega();

console.log('')
console.log('Teste 2 -> transição válida de Aguardando Pagamento para Pago:');

pedido.pagar();

console.log('');
console.log('Teste 3 -> ações inválidas no status Pago:');

pedido.pagar();
pedido.concluirEntrega();

console.log('')
console.log('Teste 4 -> transição válida de Pago para Enviado:');

pedido.enviar();

console.log('');
console.log('Teste 5 -> ações inválidas no status Enviado:');

pedido.pagar();
pedido.cancelar();
pedido.enviar();

console.log('')
console.log('Teste 6 -> transição válida de Enviado para Entregue:');

pedido.concluirEntrega();

console.log('');
console.log('Teste 7 -> ações inválidas no status Entregue:');

pedido.pagar();
pedido.cancelar();
pedido.enviar();
pedido.concluirEntrega();

console.log('');
console.log('Teste 8 -> transição válida de Aguardando Pagamento para Cancelado:');

const pedido2 = new Pedido();
pedido2.cancelar();

console.log('');
console.log('Teste 9 -> transição válida de Pago para Cancelado:');

const pedido3 = new Pedido();

pedido3.pagar();
pedido3.cancelar();

console.log('');
console.log('Teste 10 -> ações inválidas no status Cancelado:');

pedido3.pagar();
pedido3.cancelar();
pedido3.enviar();
pedido3.concluirEntrega();
