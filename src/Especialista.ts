// Classe abstrata que define a estrutura de um especialista

import { DadosSintomas } from "./DadosSintomas";

export abstract class Especialista {
  protected proximo: Especialista | null = null;

  // Define o próximo especialista na cadeia
  public definirProximo(proximo: Especialista): Especialista {
    this.proximo = proximo;
    return proximo;
  }

  // Método principal que tenta realizar o diagnóstico
  public analisar(dados: DadosSintomas): string {
    if (this.podeDiagnosticar(dados)) {
      return this.diagnosticar(dados);
    } else if (this.proximo) {
      return this.proximo.analisar(dados);
    } else {
      return "Nenhum diagnóstico foi possível.";
    }
  }

  // Métodos que as subclasses devem implementar
  protected abstract podeDiagnosticar(dados: DadosSintomas): boolean;
  protected abstract diagnosticar(dados: DadosSintomas): string;
}
