package Diagnostico;

import Especialistas.*;

import java.util.ArrayList;
import java.util.List;

public class SistemaDiagnostico {
    private Especialista primeiroEspecialista;
    private List<HistoricoDiagnostico> historico = new ArrayList<>();

    public SistemaDiagnostico() {
        Cardiologista cardio = new Cardiologista();
        Neurologista neuro = new Neurologista();
        Infectologista infecto = new Infectologista();
        Dermatologista derma = new Dermatologista();
        Gastroenterologista gastro = new Gastroenterologista();

        // Montando a cadeia: cardio -> neuro -> infecto -> derma -> gastro
        cardio.definirProximo(neuro)
              .definirProximo(infecto)
              .definirProximo(derma)
              .definirProximo(gastro);

        this.primeiroEspecialista = cardio;
    }

    public String diagnosticar(List<String> sintomas) {
        if (sintomas == null || sintomas.isEmpty()) {
            return "Erro: Nenhum sintoma foi fornecido para o diagnóstico.";
        }

        DadosSintomas dados = new DadosSintomas(sintomas);
        List<String> resultados = primeiroEspecialista.analisar(dados);

        String resultadoFinal;
        if (resultados.isEmpty()) {
            resultadoFinal = "Nenhum diagnóstico foi possível.";
        } else {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < resultados.size(); i++) {
                sb.append("Diagnóstico ").append(i + 1).append(": ").append(resultados.get(i));
                if (i < resultados.size() - 1) {
                    sb.append("\n");
                }
            }
            resultadoFinal = sb.toString();
        }

        historico.add(new HistoricoDiagnostico(sintomas, resultadoFinal));
        return resultadoFinal;
    }

    public void exibirHistorico() {
        if (historico.isEmpty()) {
            System.out.println("[Nenhum diagnóstico realizado ainda.");
        } else {
            System.out.println("\n HISTÓRICO DE DIAGNÓSTICOS:");
            for (HistoricoDiagnostico h : historico) {
                h.exibir();
            }
        }
    }
}
