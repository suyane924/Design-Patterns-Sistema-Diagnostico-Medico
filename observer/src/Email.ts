import Observer from "./Observer";

export default class Email {
  static enviar(o: Observer, msg: string) {
    console.log("-----------------------------------------");
    console.log("Enviando email para: ", o.getNome(), o.getEmail());
    console.log("Mensagem: ", msg);
    console.log("-----------------------------------------");
  }
}