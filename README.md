# 🩺 Sistema de Diagnóstico Médico Baseado em Especialistas

Trabalho final da disciplina de **Design Patterns**.  
Este projeto simula um sistema médico capaz de processar sintomas fornecidos por um usuário e retornar um possível diagnóstico, utilizando padrões de projeto para garantir flexibilidade, desacoplamento e simplicidade na interação com o sistema.

👥 **Integrantes:**
- [@Suyane Bonfanti dos Santos](https://github.com/suyane924)
- [@Maria Eduarda Monteiro Marcos](https://github.com/Guna-ME) 
- [@Gabriel Tarciso Macieiski](https://github.com/GTM16) 

---

## 🧩 Padrões Utilizados

### 🧠 Chain of Responsibility (Comportamental)

#### 📌 Objetivo
Evitar o acoplamento direto entre quem envia os dados e quem processa. Em vez de centralizar a lógica em uma única classe, o sistema distribui a responsabilidade entre diversos especialistas.

#### 🔍 Como funciona no sistema
- Os sintomas são enviados para o primeiro especialista da cadeia (por exemplo, **Cardiologista → Neurologista → Infectologista**).
- Cada especialista analisa os sintomas:
  - Se identificar que se trata de sua área, retorna um diagnóstico.
  - Se não conseguir diagnosticar, passa o caso para o próximo da cadeia.
- Se ninguém conseguir, o sistema informa que não foi possível concluir o diagnóstico.

---

### 🧰 Facade (Estrutural)

#### 📌 Objetivo
Simplificar o uso do sistema, ocultando sua complexidade.  
O usuário (ou sistema externo) interage com uma interface única e intuitiva, sem precisar conhecer a estrutura interna.

#### 🔍 Como funciona no sistema
- O usuário fornece os sintomas à fachada (`SistemaDiagnostico`).
- A fachada:
  - Monta (ou mantém) a cadeia de especialistas.
  - Inicia o processo de diagnóstico.
  - Retorna o resultado para o usuário.

---

## 🔄 Como tudo se conecta

1. O usuário chama o método `diagnosticar()` da fachada.
2. A fachada passa os sintomas para o primeiro especialista.
3. O primeiro especialista tenta diagnosticar.
4. Se não conseguir, passa para o próximo… até o fim da cadeia.
5. O sistema retorna o diagnóstico, ou uma mensagem de que não foi possível diagnosticar.

---

## 🗂️ Estrutura das Classes

```plaintext
+------------------------+
|     DadosSintomas      |
+------------------------+
| - sintomas: List<String> |
+------------------------+

          utiliza
             |
             v

+------------------------+
|     Especialista       | <<abstrato>>
+------------------------+
| - proximo: Especialista |
+------------------------+
| + definirProximo(Especialista): Especialista |
| + analisar(DadosSintomas): string             |
| # podeDiagnosticar(DadosSintomas): bool       |
| # diagnosticar(DadosSintomas): string          |
+------------------------+
           ▲
           |
   ----------------------
   |          |          |
+-------------+---------------+-----------------+
| Cardiologista              | Neurologista     | Infectologista     |
+---------------------------+------------------+--------------------+
| + podeDiagnosticar(data): bool  | ...              | ...              |
| + diagnosticar(data): string     | ...              | ...              |
+---------------------------+------------------+--------------------+

                             ^
                             |
                    chama     |
                             |
+----------------------------------+
|        SistemaDiagnostico         | <<Facade>>
+----------------------------------+
| - primeiroEspecialista: Especialista |
+----------------------------------+
| + diagnosticar(sintomas: string[]): string |
+----------------------------------+
