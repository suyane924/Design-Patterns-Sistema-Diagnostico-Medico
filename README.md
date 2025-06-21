# 🩺 Sistema de Diagnóstico Médico Baseado em Especialistas

Trabalho final da disciplina de **Design Patterns**.  
Este projeto simula um sistema médico capaz de processar sintomas fornecidos por um usuário e retornar um possível diagnóstico, utilizando padrões de projeto para garantir flexibilidade, desacoplamento e simplicidade na interação com o sistema.

👥 **Integrantes:**
- [@Suyane Bonfanti dos Santos](https://github.com/suyane924)
- [@Maria Eduarda Monteiro Marcos](https://github.com/Guna-ME) 
- [@Gabriel Tarciso Macieiski](https://github.com/GTM16) 

---

## 📌 Padrões de Projeto Utilizados

### 🔗 Chain of Responsibility

O sistema é composto por uma cadeia de especialistas médicos (Cardiologista, Neurologista, Infectologista, Dermatologista e Gastroenterologista).  
Cada um verifica se consegue diagnosticar com base nos sintomas. Agora, mais de um especialista pode emitir diagnóstico simultaneamente, se os sintomas coincidirem com mais de uma especialidade.

### 🧱 Facade

A classe `SistemaDiagnostico` funciona como uma fachada para o sistema. Ela encapsula a lógica de criação, organização da cadeia, análise de sintomas e histórico de diagnósticos, oferecendo uma interface única e simples para quem utiliza o sistema.

---

## 🧪 Como o sistema funciona

Ao executar o projeto via terminal, o usuário é instruído a digitar os sintomas separados por vírgula (por exemplo: `febre, dor no peito`).  
O sistema então analisa os sintomas, identifica os especialistas que podem oferecer um diagnóstico e exibe os resultados.

O processo é repetido até que o usuário digite `sair`.  
Ao encerrar, o sistema exibe um histórico de todos os diagnósticos feitos durante a execução.

---

## 💡 Sintomas reconhecidos

| Especialista          | Sintomas reconhecidos                          |
|-----------------------|-----------------------------------------------|
| Cardiologista         | dor no peito, pressão alta, taquicardia       |
| Neurologista          | dor de cabeça, convulsão, tontura              |
| Infectologista        | febre, calafrios, dores no corpo               |
| Dermatologista        | coceira, vermelhidão, manchas                  |
| Gastroenterologista   | dor abdominal, náusea, diarreia                |

---

## ✅ Funcionalidades

- Diagnóstico automático com base nos sintomas fornecidos
- Identificação de múltiplos diagnósticos possíveis
- Histórico de diagnósticos mostrado ao final
- Aplicação dos padrões de projeto Chain of Responsibility e Facade
- Interface simples via terminal

---

## 🗂️ Estrutura das Classes

```plaintext
+--------------------------+
|      DadosSintomas       |
+--------------------------+
| - sintomas: List<String> |
+--------------------------+

           usado por
               |
               v

+---------------------------+
|      Especialista         |  <<abstrato>>
+---------------------------+
| - proximo: Especialista   |
+---------------------------+
| + definirProximo(e): Especialista  |
| + analisar(dados): List<String>   |
| # podeDiagnosticar(dados): bool   |
| # diagnosticar(dados): String     |
+---------------------------+
           ▲
           |
  -----------------------------------------------
  |            |              |                |
  |            |              |                |
+---------------+ +----------------+ +----------------------+
| Cardiologista | | Neurologista   | | Infectologista       |
+---------------+ +----------------+ +----------------------+
| + podeDiagnosticar(...)          | | + podeDiagnosticar(...)     |
| + diagnosticar(...)              | | + diagnosticar(...)         |
+---------------+ +----------------+ +----------------------+

           |
           |         
  -------------------------------
  |                             |
+----------------------+  +------------------------+
| Dermatologista       |  | Gastroenterologista    |
+----------------------+  +------------------------+
| + podeDiagnosticar(...)     | | + podeDiagnosticar(...)     |
| + diagnosticar(...)         | | + diagnosticar(...)         |
+----------------------+  +------------------------+

                              ▲
                              |
                       utiliza internamente
                              |
+--------------------------------------------+
|          SistemaDiagnostico                |  <<Facade>>
+--------------------------------------------+
| - primeiroEspecialista: Especialista       |
| - historico: List<HistoricoDiagnostico>    |
+--------------------------------------------+
| + diagnosticar(sintomas: List<String>): String |
| + exibirHistorico(): void                     |
+--------------------------------------------+


+----------------------------------+
