import leia from "readline-sync";

const lista: Set<number> = new Set<number>();
const repetidos: Set<number> = new Set<number>();

for (let contador = 0; contador < 10; contador++) {
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

pularLinha();

const listaOrdenada = Array.from(lista).sort((a, b) => a - b);
console.log("Numeros digitados:");
for (let numero of listaOrdenada) {
    console.log(numero);
}

pularLinha();

if (repetidos.size > 0) {
    const repetidosOrdenados = Array.from(repetidos).sort((a, b) => a - b);
    console.log("Numeros repetidos:");
    for (let num of repetidosOrdenados) {
        console.log(num);
    }
} else {
    console.log("Nenhum numero repetido foi digitado.");
}
