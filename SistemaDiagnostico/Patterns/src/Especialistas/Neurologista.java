package Especialistas;

import Diagnostico.DadosSintomas;
import java.util.Arrays;

public class Neurologista extends Especialista {
    @Override
    protected boolean podeDiagnosticar(DadosSintomas dados) {
        return dados.getSintomas().stream()
            .map(String::toLowerCase)
            .anyMatch(s -> Arrays.asList("dor de cabeca", "convulsao", "tontura").contains(s));
    }

    @Override
    protected String diagnosticar(DadosSintomas dados) {
        return "Diagnóstico pelo Neurologista: possível condição neurológica.";
    }
}
