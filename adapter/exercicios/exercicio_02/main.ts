import { DepartamentoA, FuncionarioA, SistemaRHA } from "./SistemaRHA";
import { HRSystemB } from "./SistemaRHB";

console.log("=== DEMONSTRAÇÃO DO ADAPTADOR DE SISTEMAS DE RH ===");

// Instancia os sistemas
const sistemaA = new SistemaRHA();
const sistemaB = new HRSystemB();

console.log("1. Listando funcionários originais do Sistema A:");
console.log(sistemaA.listarFuncionarios());

console.log("3. Adicionando um novo funcionário:");
const novoFuncionario: FuncionarioA = {
  id: 100,
  nome: "Ana",
  sobrenome: "Ferreira",
  dataContratacao: new Date("2023-01-10"),
  cargo: "Analista de Marketing",
  departamento: DepartamentoA.MARKETING,
  salario: 6500,
  statusAtivo: true,
};
sistemaA.adicionarFuncionario(novoFuncionario);
