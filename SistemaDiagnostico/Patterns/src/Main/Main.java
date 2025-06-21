package Main;

import Diagnostico.SistemaDiagnostico;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        SistemaDiagnostico sistema = new SistemaDiagnostico();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Sistema de Diagnóstico Médico");
        System.out.println("Digite os sintomas separados por vírgula (ou 'sair' para encerrar)");

        while (true) {
            System.out.print("\nSintomas: ");
            String entrada = scanner.nextLine();

            if (entrada.trim().equalsIgnoreCase("sair")) {
                break;
            }

            List<String> sintomas = Arrays.stream(entrada.split(","))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .collect(Collectors.toList());

            String resultado = sistema.diagnosticar(sintomas);
            System.out.println("Resultado:\n" + resultado);
        }

        sistema.exibirHistorico();
        scanner.close();
    }
}
