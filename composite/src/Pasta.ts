import { Arquivo } from "./Arquivo";

export class Pasta {
    public name: string;
    public caminho: string;
    public componentes: Arquivo[];

    constructor(name: string, caminho: string) {
        this.name = name;
        this.caminho = caminho;
        this.componentes = [];
    }

    public adicionar(componente: Arquivo) {
        this.componentes.push(componente);
    }

    public remover(componente: Arquivo) {
        this.componentes = this.componentes.filter(c => c !== componente);
    }

    public recuperarFilhos(indice: number) {
        return this.componentes[indice];
    }

    public getNome(): string {
        return this.name;
    }

    public getCaminho(): string {
        return this.caminho;
    }
    
    public exibir(spacer: string = ""): void {
        console.log(`${spacer}${this.name} - [${this.caminho}]`);

        this.componentes.forEach(componente => {
            componente.exibir("  ");
        });
    }
    
}