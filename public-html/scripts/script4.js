// 6. Crea una función mayorDeTres(a, b, c) que devuelva el mayor número

// Declaración de variables
let primer, segundo, tercero;

// Ciclos do-while
do {
    primer = parseFloat(prompt("Ingrese el primer número:"));
    if (isNaN(primer)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(primer));

do {
    segundo = parseFloat(prompt("Ingrese el segundo número:"));
    if (isNaN(segundo)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(segundo));

do {
    tercero = parseFloat(prompt("Ingrese el tercero número:"));
    if (isNaN(tercero)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(tercero));

// Funcion mayorDeTres
function mayorDeTres(a, b, c) {
    const numeros = [a, b, c];
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i + 1] > numeros[i] && i + 1 < numeros.length) {
            mayor = numeros[i + 1];
            // a = b;
        }
    }
}

const resultado = mayorDeTres(primer, segundo, tercero);

console.log(resultado);