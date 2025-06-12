// Simulação de uso do sistema de diagnóstico

import { SistemaDiagnostico } from "./SistemaDiagnostico";

const sistema = new SistemaDiagnostico();

const pacientes = [
  ["dor no peito", "pressão alta"],
  ["febre", "dores no corpo"],
  ["convulsão"],
  ["cansaço", "coceira"] // sintomas que nenhum especialista reconhece
];

pacientes.forEach((sintomas, i) => {
  console.log(`\nPaciente ${i + 1} - Sintomas: ${sintomas.join(", ")}`);
  console.log("Resultado:", sistema.diagnosticar(sintomas));
});
