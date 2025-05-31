import leia from "readline-sync";

const lista: Array<string> = new Array<string>()

for (let contador = 0; contador < 5; contador++) {
    lista.push(leia.question("Digite uma cor: "))
}

function adicionaCores() {
    let continuar = true;

    while (continuar) {
        const cor = leia.question("Quer adicionar mais uma cor? Digite ou aperte Enter para sair: ");

        if (cor === "") {
            continuar = false;
        } else {
            lista.push(cor);
        }
    }
}

function pularLinha() {
    console.log();
}

adicionaCores();

pularLinha();

console.log(`** Lista das cores: **`)
for (let cor of lista) {
    console.log(cor);
}

pularLinha();

console.log("** Cores em ordem alfabetica: ** ");
lista.sort()
for (let cor of lista) {
    console.log(cor);
}

