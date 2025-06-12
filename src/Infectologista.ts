import { Especialista } from "./Especialista";
import { DadosSintomas } from "./DadosSintomas";

export class Infectologista extends Especialista {
  protected podeDiagnosticar(dados: DadosSintomas): boolean {
    return dados.sintomas.some(s =>
      ["febre", "calafrios", "dores no corpo"].includes(s.toLowerCase())
    );
  }

  protected diagnosticar(dados: DadosSintomas): string {
    return "Diagnóstico pelo Infectologista: possível infecção.";
  }
}