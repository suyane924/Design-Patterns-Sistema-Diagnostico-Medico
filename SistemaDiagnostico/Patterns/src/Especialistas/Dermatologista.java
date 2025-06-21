package Especialistas;

import Diagnostico.DadosSintomas;
import java.util.Arrays;

public class Dermatologista extends Especialista {
    @Override
    protected boolean podeDiagnosticar(DadosSintomas dados) {
        return dados.getSintomas().stream()
            .map(s -> s.toLowerCase().trim())
            .anyMatch(s -> Arrays.asList("coceira", "vermelhidao", "manchas").contains(s));
    }

    @Override
    protected String diagnosticar(DadosSintomas dados) {
        return "Diagnóstico pelo Dermatologista: possível problema de pele.";
    }
}
