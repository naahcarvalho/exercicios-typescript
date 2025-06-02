import leia from "readline-sync";

class Stack {
  private items: string[] = [];

  public push(livro: string): void {
    this.items.push(livro);
  }

  public pop(): string | undefined {
    if (this.isEmpty()) {
      console.log("\nA Pilha esta vazia!");
      return;
    }
    return this.items.pop();
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public list(): void {
    if (this.isEmpty()) {
      console.log("\nA Pilha esta vazia!");
    } else {
      console.log("\nLista de Livros na Pilha:");
      this.items.forEach((livro) => console.log(livro));
    }
  }

  public print(): void {
    if (this.isEmpty()) {
      console.log("\nA Pilha está vazia!");
    } else {
      console.log("\nPilha:");
      this.items.forEach((livro) => console.log(livro));
    }
  }
}

const pilha = new Stack();
let opcao: number;

console.log("\n--- Biblioteca ---");

do {
  console.log("\n1 - Adicionar Livro na Pilha");
  console.log("2 - Listar todos os Livros da Pilha");
  console.log("3 - Retirar Livro da Pilha");
  console.log("0 - Sair");
  opcao = leia.questionInt("\nDigite uma opcao: ");

  switch (opcao) {
    case 1:
      const nome: string = leia.question("\nDigite o nome: ");
      pilha.push(nome);
      pilha.print();
      console.log("\nLivro adicionado!");
      break;

    case 2:
      pilha.list();
      break;

    case 3:
      const removido = pilha.pop();
      if (removido) {
        pilha.print();
        console.log("\nUm Livro foi retirado da pilha!");
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpcao invalida!");
  }
} while (opcao !== 0);
