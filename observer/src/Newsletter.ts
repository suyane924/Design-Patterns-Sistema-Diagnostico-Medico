import Observer from "./Observer";
import Subject from "./Subject";

export default class Newsletter implements Subject {
  private observers: Observer[] = [];
  private mensagens: string[] = [];

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    for (let i = 0; i < this.observers.length; i++) {
      if (this.observers[i] === o) {
        this.observers.splice(i, 1);
      }
    }
  }

  notifyObservers(msg: string): void {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(msg);
    }
  }

  addMensagem(msg: string): void {
    this.mensagens.push(msg);
    this.notifyObservers(msg);
  }
}