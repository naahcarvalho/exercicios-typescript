import leia from "readline-sync";

export interface queueInterface<Type> {
    enqueue(dataItem: Type): void;
    dequeue(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printQueue(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {
    private QueueData: Array<Type> = [];

    constructor() { }

    enqueue(dataItem: Type): void {
        this.QueueData.push(dataItem);
    }

    dequeue(): Type | undefined {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        return this.QueueData.shift();
    }

    isEmpty(): boolean {
        return this.QueueData.length === 0;
    }

    count(): number {
        return this.QueueData.length;
    }

    printQueue(): void {
        if (this.isEmpty()) {
            console.log("\nA fila está vazia!");
        } else {
            console.log("\nFila:");
            for (let i = 0; i < this.QueueData.length; i++) {
                console.log(this.QueueData[i]);
            }
        }
    }

    peek(): Type | undefined {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        return this.QueueData[0];
    }

    contains(dataItem: Type): boolean {
        return this.QueueData.includes(dataItem);
    }

    clear(): void {
        this.QueueData = [];
    }
}

const fila = new Queue<string>();
let opcao: number;

console.log('\n--- Banco ---');

do {
    console.log('\n1 - Adicionar Cliente na Fila');
    console.log('2 - Listar Clientes na Fila');
    console.log('3 - Chamar Cliente da Fila');
    console.log('0 - Sair');
    opcao = leia.questionInt('\nDigite uma opcao: ');

    switch (opcao) {
        case 1:
            const nome: string = leia.question('\nDigite o nome: ');
            fila.enqueue(nome);
            fila.printQueue();
            console.log('\nCliente Adicionado!');
            break;

        case 2:
            fila.printQueue();
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log('\nA fila está vazia!');
            } else {
                fila.dequeue();
                fila.printQueue();
                console.log('\nO Cliente foi Chamado!');
            }
            break;

        case 0:
            console.log('\nPrograma Finalizado!');
            break;

        default:
            console.log('\nOpcaoo invalida!');
    }
} while (opcao !== 0);
