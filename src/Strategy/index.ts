import { DescontoClienteVIPStrategy } from "./components/DescontoClienteVIPStrategy";
import { DescontoCupomFixoStrategy } from "./components/DescontoCupomFixoStrategy";
import { DescontoPorQuantidadeStrategy } from "./components/DescontoPorQuantidadeStrategy";
import { NotificacaoEmailStrategy } from "./components/NotificacaoEmailStrategy";
import { NotificacaoSMSStrategy } from "./components/NotificacaoSMSStrategy";
import { NotificacaoWhatsAppStrategy } from "./components/NotificacaoWhatsAppStrategy";
import { PagamentoBoletoStrategy } from "./components/PagamentoBoletoStrategy";
import { PagamentoCartaoCreditoStrategy } from "./components/PagamentoCartaoCreditoStrategy";
import { PagamentoPixStrategy } from "./components/PagamentoPixStrategy";
import { Pedido } from "./components/Pedido";
import { ProcessadorPedido } from "./components/ProcessadorPedido";

// Criando pedidos de teste
const pedidoA = new Pedido("PED-101", [
    { nome: "Mouse Gamer", preco: 150.00, quantidade: 1 },
    { nome: "Teclado Mecânico", preco: 350.00, quantidade: 1 }
], "cliente@email.com");

const pedidoB = new Pedido("PED-102", [
    { nome: "Caneta Personalizada", preco: 10.00, quantidade: 10 }
], "+5554999998888");

const processador = new ProcessadorPedido(
    new DescontoClienteVIPStrategy(),
    new PagamentoPixStrategy(),
    new NotificacaoEmailStrategy()
);

// Execução 1: VIP + Pix + E-mail
processador.finalizarPedido(pedidoA);

// Execução 2: Mudança Dinâmica -> Quantidade + Cartão + WhatsApp
processador.setDescontoStrategy(new DescontoPorQuantidadeStrategy());
processador.setPagamentoStrategy(new PagamentoCartaoCreditoStrategy());
processador.setNotificacaoStrategy(new NotificacaoWhatsAppStrategy());
processador.finalizarPedido(pedidoB);

// Execução 3: Mudança Dinâmica -> Cupom Fixo + Boleto + SMS
processador.setDescontoStrategy(new DescontoCupomFixoStrategy());
processador.setPagamentoStrategy(new PagamentoBoletoStrategy());
processador.setNotificacaoStrategy(new NotificacaoSMSStrategy());
processador.finalizarPedido(pedidoA);
