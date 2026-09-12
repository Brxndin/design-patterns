import { LogDecorator } from "./components/LogDecorator";
import { NotificadorEmail } from "./components/NotificadorEmail"
import { SMSDecorator } from "./components/SMSDecorator";
import { WhatsAppDecorator } from "./components/WhatsAppDecorator";

console.log('Cenário A: e-mail + SMS');
console.log('---------------------');
const notificacaoCenarioA = new SMSDecorator(new NotificadorEmail());

notificacaoCenarioA.enviar('Esteja notificado');

console.log('');

console.log('Cenário B: e-mail + WhatsApp + SMS + log');
console.log('---------------------');
const notificacaoCenarioB = new LogDecorator(new WhatsAppDecorator(new SMSDecorator(new NotificadorEmail())));

notificacaoCenarioB.enviar('Esteja notificado');
