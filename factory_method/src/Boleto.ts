export default abstract class Boleto {
    protected valor: number;
    protected juros: number = 0;
    protected desconto: number = 0;
    protected multa: number = 0;

    constructor(valor: number) {
        this.valor = valor;
    }

    public calcularJuros(): number {
        return this.valor * this.juros;
    }

    public calcularDesconto(): number {
        return this.valor * this.desconto;
    }

    public calcularMulta(): number {
        return this.valor * this.multa;
    }
}
