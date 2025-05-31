import leia from "readline-sync";

const lista: Set<number> = new Set<number>();
const repetidos: Set<number> = new Set<number>();

while (lista.size < 10) {
    let numero = leia.questionInt("Digite um numero: ");

    if (lista.has(numero)) {
        repetidos.add(numero);
    } else {
        lista.add(numero);
    }
}

function pularLinha() {
    console.log();
}

pularLinha()

console.log("Números sem repeticao:");
for (let numero of lista) {
    console.log(numero);
}

pularLinha()

if (repetidos.size > 0) {
    console.log("Numeros repetidos digitados: ");
    for (let num of repetidos) {
        console.log(num);
    }
} else {
    console.log("Nenhum numero repetido foi digitado.");
}
