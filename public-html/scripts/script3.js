// 5. Crea una función esMultiplo(a, b) que indique si a es múltiplo de b

console.log("EJERCICIO 3 (5.)");
document.write(`<h3>Ejercicio 3</h3>`);

// Declaración de variables
let numero, multiplo;
// Ciclos do-while pra verificar la validez de los números
do {
    numero = parseFloat(prompt("Ingrese un número:"));
    if (isNaN(numero)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO")
    }
} while (isNaN(numero));

do {
    multiplo = parseFloat(prompt("Ingrese el otro número:"));
    if (isNaN(multiplo) || multiplo === 0) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO")
    }
} while (isNaN(multiplo) || multiplo === 0);

// Función esMultiplo
function esMultiplo(a, b) {
    if (a > b) { // Verifica que el número no sea mayor que el múltiplo
        return false;
    } else {
        return b % a === 0;
    }
}

const resultado = esMultiplo(numero, multiplo);

// Salida de datos
console.log("Número ingresado: " + numero + "\nMúltiplo posible: " + multiplo);
console.log((resultado === true ? multiplo + " ES múltiplo de " + numero : multiplo + " NO es múltiplo de " + numero));

document.write(`<p>Número ingresado: ${numero}<br>Posible múltiplo: ${multiplo}<br><b>${resultado === true ? multiplo + " ES múltiplo de " + numero : multiplo + " NO es múltiplo de " + numero}</b> </p>`);