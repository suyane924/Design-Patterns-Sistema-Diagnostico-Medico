import { Pedido } from "./Pedido";

export class CalculadoraPontos {
  calcularPontos(p: Pedido, dia: number): number {
    const valor = p.getValor();
    let pontos = 0;

    if (valor >= 70) {
      pontos = Math.floor(valor / 5);
    } else if (valor >= 40) {
      pontos = Math.floor(valor / 7);
    } else if (valor >= 20) {
      pontos = Math.floor(valor / 10);
    } else {
      return 0;
    }

    if (dia >= 16 && dia <= 31) {
      return pontos * 2;
    }

    return pontos;
  }
}
