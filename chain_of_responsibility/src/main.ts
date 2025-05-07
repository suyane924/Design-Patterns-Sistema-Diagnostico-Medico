import { CalculadoraPontos } from "./CalculadoraPontos";
import { Pedido } from "./Pedido";

const pedido = new Pedido();
const calculadoraPontos = new CalculadoraPontos();

pedido.setValor(21);

console.log(`Dia 15: ${calculadoraPontos.calcularPontos(pedido, 15)} Pontos`);
console.log(`Dia 16: ${calculadoraPontos.calcularPontos(pedido, 16)} Pontos`);
console.log("########################");

pedido.setValor(100);

console.log(`Dia 15: ${calculadoraPontos.calcularPontos(pedido, 15)} Pontos`);
console.log(`Dia 16: ${calculadoraPontos.calcularPontos(pedido, 16)} Pontos`);

