package Especialistas;

import Diagnostico.DadosSintomas;

import java.util.ArrayList;
import java.util.List;

public abstract class Especialista {
    protected Especialista proximo;

    public Especialista definirProximo(Especialista proximo) {
        this.proximo = proximo;
        return proximo;
    }

    // Agora retorna lista de diagnósticos possíveis
    public List<String> analisar(DadosSintomas dados) {
        List<String> resultados = new ArrayList<>();

        if (podeDiagnosticar(dados)) {
            resultados.add(diagnosticar(dados));
        }

        if (proximo != null) {
            resultados.addAll(proximo.analisar(dados));
        }

        return resultados;
    }

    protected abstract boolean podeDiagnosticar(DadosSintomas dados);
    protected abstract String diagnosticar(DadosSintomas dados);
}
