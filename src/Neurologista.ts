import { Especialista } from "./Especialista";
import { DadosSintomas } from "./DadosSintomas";

export class Neurologista extends Especialista {
  protected podeDiagnosticar(dados: DadosSintomas): boolean {
    return dados.sintomas.some(s =>
      ["dor de cabeça", "convulsão", "tontura"].includes(s.toLowerCase())
    );
  }

  protected diagnosticar(dados: DadosSintomas): string {
    return "Diagnóstico pelo Neurologista: possível condição neurológica.";
  }
}
