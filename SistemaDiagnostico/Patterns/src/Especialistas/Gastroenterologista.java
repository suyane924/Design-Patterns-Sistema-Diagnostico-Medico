package Especialistas;

import Diagnostico.DadosSintomas;
import java.util.Arrays;

public class Gastroenterologista extends Especialista {
    @Override
    protected boolean podeDiagnosticar(DadosSintomas dados) {
        return dados.getSintomas().stream()
            .map(s -> s.toLowerCase().trim())
            .anyMatch(s -> Arrays.asList("dor abdominal", "nausea", "diarreia").contains(s));
    }

    @Override
    protected String diagnosticar(DadosSintomas dados) {
        return "Diagnóstico pelo Gastroenterologista: possível problema digestivo.";
    }
}
