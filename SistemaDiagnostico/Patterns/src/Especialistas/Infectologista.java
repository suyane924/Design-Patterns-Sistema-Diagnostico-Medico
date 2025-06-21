package Especialistas;

import Diagnostico.DadosSintomas;
import java.util.Arrays;

public class Infectologista extends Especialista {
    @Override
    protected boolean podeDiagnosticar(DadosSintomas dados) {
        return dados.getSintomas().stream()
            .map(String::toLowerCase)
            .anyMatch(s -> Arrays.asList("febre", "calafrios", "dores no corpo").contains(s));
    }

    @Override
    protected String diagnosticar(DadosSintomas dados) {
        return "Diagnóstico pelo Infectologista: possível infecção.";
    }
}
