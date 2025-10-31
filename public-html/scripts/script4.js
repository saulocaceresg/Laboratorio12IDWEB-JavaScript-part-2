// 6. Crea una función mayorDeTres(a, b, c) que devuelva el mayor número

console.log("EJERCICIO 4 (6.)");
document.write(`<h3>Ejercicio 4</h3>`);
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
    if (a === b && b === c && c === a) { // Verifica si todos los números son iguales
        return "NO HAY NÚMERO MAYOR: Todos son iguales.";
    }
    const numeros = [a, b, c]; // Arreglo que almacena los números
    let mayor = numeros[0]; // Se declara al primero como el mayor
    // Ciclo for para encontrar el mayor
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i + 1] > numeros[i] && i + 1 < numeros.length) {
            mayor = numeros[i + 1];
            // a = b;
        }
    }
    return mayor;
}

const resultado = mayorDeTres(primer, segundo, tercero);

// Salida de datos
console.log("Primero número: " + primer + "\nSegundo número: " + segundo + "\nTercer número: " + tercero);
console.log("Número mayor: " + resultado);
document.write(`<p><b>Números ingresados:</b><br>1°: ${primer}<br>2°: ${segundo}<br>3°: ${tercero}<br><b>Número mayor:</b> ${resultado}</p>`);