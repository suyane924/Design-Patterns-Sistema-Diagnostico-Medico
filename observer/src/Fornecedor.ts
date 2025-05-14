import Email from "./Email";
import Observer from "./Observer";
import Subject from "./Subject";

export default class Fornecedor implements Observer {
  private nome: string;
  private email: string;
  private subject: Subject;

  constructor(nome: string, email: string, s: Subject) {
    this.nome = nome;
    this.email = email;
    this.subject = s;
    this.subject.registerObserver(this);
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }

  update(msg: string): void {
    console.log("### Fornecedor ###");
    Email.enviar(this, msg);
  }
}