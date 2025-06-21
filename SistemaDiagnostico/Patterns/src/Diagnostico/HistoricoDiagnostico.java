package Diagnostico;

import java.time.LocalDateTime;
import java.util.List;

public class HistoricoDiagnostico {
    private List<String> sintomas;
    private String resultado;
    private LocalDateTime dataHora;

    public HistoricoDiagnostico(List<String> sintomas, String resultado) {
        this.sintomas = sintomas;
        this.resultado = resultado;
        this.dataHora = LocalDateTime.now();
    }

    public void exibir() {
        System.out.println(dataHora);
        System.out.println("Sintomas: " + String.join(", ", sintomas));
        System.out.println("Resultado: " + resultado);
        System.out.println("----------------------------------");
    }
}
