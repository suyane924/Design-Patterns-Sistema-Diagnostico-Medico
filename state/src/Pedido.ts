export enum PedidoEstado {
  AGUARDANDO_PAGAMENTO = 1,
  PAGO,
  CANCELADO,
  ENVIADO
}

export class Pedido {
  private estado: PedidoEstado;

  constructor() {
    this.estado = PedidoEstado.AGUARDANDO_PAGAMENTO;
  }

  pago() {
    if (this.estado !== PedidoEstado.AGUARDANDO_PAGAMENTO) {
      throw new Error("O pedido não está aguardando pagamento");
    }

    this.estado = PedidoEstado.PAGO;
  }

  cancelar() {
    if (this.estado === PedidoEstado.AGUARDANDO_PAGAMENTO) {
      this.estado = PedidoEstado.CANCELADO;
    } else if (this.estado === PedidoEstado.PAGO) {
      this.estado = PedidoEstado.CANCELADO;
    } else {
      throw new Error("O pedido não pode ser cancelado");
    }
  }

  despachar() {
    if (this.estado !== PedidoEstado.PAGO) {
      throw new Error("O pedido não pode ser despachado");
    }

    this.estado = PedidoEstado.ENVIADO;
  }
}