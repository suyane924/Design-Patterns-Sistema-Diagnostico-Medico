// Facade que monta e expõe a cadeia de especialistas

import { DadosSintomas } from "./DadosSintomas";
import { Especialista } from "./Especialista";
import { Cardiologista } from "./Cardiologista";
import { Neurologista } from "./Neurologista";
import { Infectologista } from "./Infectologista";

export class SistemaDiagnostico {
  private primeiroEspecialista: Especialista;

  constructor() {
    // Criando os especialistas
    const cardio = new Cardiologista();
    const neuro = new Neurologista();
    const infecto = new Infectologista();

    // Montando a cadeia de responsabilidade
    cardio.definirProximo(neuro).definirProximo(infecto);
    this.primeiroEspecialista = cardio;
  }

  // Método principal chamado externamente para diagnóstico
  public diagnosticar(sintomas: string[]): string {
    const dados = new DadosSintomas(sintomas);
    return this.primeiroEspecialista.analisar(dados);
  }
}
