// 14.	Crea una función operacionesMatematicas() que internamente defina sumar, restar, multiplicar y dividir, sólo usando closures y funciones flecha

console.log("EJERCICIO 11 (14.)");
document.write(`<h3>Ejercicio 11</h3>`);

let opcion, num1, num2;
do {
    opcion = parseInt(prompt("Elige una operación:\n(1) Sumar\n(2) Resta\n(3) Multiplicar\n(4) Dividir"));
    if (opcion < 1 || opcion > 4) {
        alert("OPCIÓN NO VÁLIDA.\nINGRESE DE NUEVO.");
    }
} while (opcion < 1 || opcion > 4);

do {
    num1 = parseFloat(prompt("Ingresa el primer número:"));
    if (isNaN(num1)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(num1));

do {
    num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (isNaN(num2)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(num2));

// Funcion con funciones flecha y usando closure
function operacionesMatematicas(a, b) {
    let resultado = 0;
    const sumar = () => resultado = a + b;
    const restar = () => resultado = a - b;
    const multiplicar = () => resultado = a * b;
    const dividir = () => resultado = a / b;

    return function accion(opcion) {
        switch (opcion) {
            case 1: return sumar();
            case 2: return restar();
            case 3: return multiplicar();
            case 4: return dividir();
            default: undefined;
        }
    }
}

const resultado = operacionesMatematicas(num1, num2);

// Para imprimir el resultado
let elegido = "";
switch (opcion) {
    case 1: console.log("Sumar"); elegido = "Sumar"; break;
    case 2: console.log("Restar"); elegido = "Resta" ; break;
    case 3: console.log("Multiplicar"); elegido = "Multiplicar" ; break;
    case 4: console.log("Dividir"); elegido = "Dividir" ; break;
    default: console.log("OPCIÓN NO VÁLIDA") ; break;
}

// Salida de datos
console.log("Números ingresados: " + num1 + "; " + num2);
console.log("Resultado: " + resultado(opcion));
document.write(`<p>Números ingresado: ${num1}; ${num2}<br>Operación: ${elegido}<br><b>Resultado:</b> ${resultado(opcion)} </p>`);