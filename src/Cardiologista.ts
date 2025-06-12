import { Especialista } from "./Especialista";
import { DadosSintomas } from "./DadosSintomas";

export class Cardiologista extends Especialista {
  protected podeDiagnosticar(dados: DadosSintomas): boolean {
    return dados.sintomas.some(s =>
      ["dor no peito", "pressão alta", "taquicardia"].includes(s.toLowerCase())
    );
  }

  protected diagnosticar(dados: DadosSintomas): string {
    return "Diagnóstico pelo Cardiologista: possível problema cardíaco.";
  }
}
