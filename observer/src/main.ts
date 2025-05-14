import Cliente from "./Cliente";
import Colaborador from "./Colaborador";
import Fornecedor from "./Fornecedor";
import Newsletter from "./Newsletter";
import Parceiro from "./Parceiro";

const newsletter = new Newsletter();

const colaborador = new Colaborador("João", "joao@gmail.com", newsletter);
const fornecedor = new Fornecedor("Maria", "maria@gmail.com", newsletter);
const parceiro = new Parceiro("Pedro", "pedro@gmail.com", newsletter);

newsletter.addMensagem("Primeira mensagem");

const cliente = new Cliente("Ana", "ana@gmail.com", newsletter);

newsletter.addMensagem("Segunda mensagem");

newsletter.removeObserver(colaborador);

newsletter.addMensagem("Terceira mensagem");

