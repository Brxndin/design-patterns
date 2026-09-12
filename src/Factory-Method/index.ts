import { GerenciadorNotificacao } from "./components/base/GerenciadorNotificacao";
import { GerenciadorEmail } from "./components/factories/GerenciadorEmail";
import { GerenciadorPush } from "./components/factories/GerenciadorPush";
import { GerenciadorSMS } from "./components/factories/GerenciadorSMS";

function teste(gerenciador: GerenciadorNotificacao) {
    gerenciador.notificar('Oiiiii', 'Gabriel');
}

console.log('======= Teste Gerenciador E-mail:')

const gerenciadorEmail = new GerenciadorEmail();

teste(gerenciadorEmail);

console.log('')
console.log('======= Teste Gerenciador SMS:')

const gerenciadorSMS = new GerenciadorSMS();

teste(gerenciadorSMS);

console.log('')
console.log('======= Teste Gerenciador Push:')

const gerenciadorPush = new GerenciadorPush();

teste(gerenciadorPush);
