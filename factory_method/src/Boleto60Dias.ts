import Boleto from "./Boleto";

export default class Boleto60Dias extends Boleto {
    constructor(valor: number) {
        super(valor);

        this.juros = 0.10;
        this.desconto = 0;
        this.multa = 0.20;
    }
}
