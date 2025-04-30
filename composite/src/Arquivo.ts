export class Arquivo {
    public name: string;
    public caminho: string;

    constructor(name: string, caminho: string) {
        this.name = name;
        this.caminho = caminho;
    }

    public getNome(): string {
        return this.name;
    }

    public getCaminho(): string {
        return this.caminho;
    }

    public exibir(spacer: string = ""): void {
        console.log(`${spacer}${this.name} - [${this.caminho}]`);
    }
}   