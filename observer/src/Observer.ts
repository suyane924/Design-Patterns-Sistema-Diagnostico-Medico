export default interface Observer {
  getNome(): string;
  getEmail(): string;
  update(msg: string): void;
}
