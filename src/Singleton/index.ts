import { LoggerService } from "./services/LoggerService";

const logger = LoggerService.getInstancia();

console.log('Teste 1 -> adicionando log:');

logger.log('INFO', 'primeiro teste');
logger.imprimirHistorico();

console.log('');
console.log('Teste 2 -> limpando logs:');

logger.limparLogs();
logger.imprimirHistorico();

console.log('');
console.log('Teste 3 -> adicionando mais logs que o máximo:');

logger.log('INFO', 'primeiro teste');
logger.log('INFO', 'segundo teste');
logger.log('INFO', 'terceiro teste');
logger.log('INFO', 'quarto teste');
logger.log('INFO', 'quinto teste');
logger.log('INFO', 'sexto teste');
logger.imprimirHistorico();

console.log('');
console.log('Teste 4 -> comparando duas variáveis com a instância do singleton:');

const logger2 = LoggerService.getInstancia();
console.log(logger === logger2);
