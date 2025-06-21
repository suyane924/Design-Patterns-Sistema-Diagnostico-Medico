package Diagnostico;

import java.util.List;

public class DadosSintomas {
    private List<String> sintomas;

    public DadosSintomas(List<String> sintomas) {
        this.sintomas = sintomas;
    }

    public List<String> getSintomas() {
        return sintomas;
    }
}
