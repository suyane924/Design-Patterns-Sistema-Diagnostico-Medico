package Especialistas;

import Diagnostico.DadosSintomas;
import java.util.Arrays;

public class Cardiologista extends Especialista {
    @Override
    protected boolean podeDiagnosticar(DadosSintomas dados) {
        return dados.getSintomas().stream()
            .map(String::toLowerCase)
            .anyMatch(s -> Arrays.asList("dor no peito", "pressão alta", "taquicardia").contains(s));
    }

    @Override
    protected String diagnosticar(DadosSintomas dados) {
        return "Diagnóstico pelo Cardiologista: possível problema cardíaco.";
    }
}
