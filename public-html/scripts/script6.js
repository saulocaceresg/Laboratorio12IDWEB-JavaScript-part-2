// 8. Crea una función expresada convertirAMayusculas que reciba un texto y lo devuelva en mayúsculas

console.log("EJERCICIO 6 (8.)");
document.write(`<h3>Ejercicio 6</h3>`);

// Declaración de variable
let cadena;

// Do-while para verificar si está o no vacío
do {
    cadena = prompt("Escriba algo, lo que sea:");
    if (cadena.length === 0) {
        alert("TEXTO VACÍO.\nINGRESE DE NUEVO.")
    }
} while (cadena.length === 0);

// Función declarada convertirAMayusculas
const convertirAMayusculas = function (texto) {
    return (texto === texto.toUpperCase()) ? "El texto ya está en mayúsculas" + "\n" + texto : texto.toUpperCase();
}

// Salida de datos
console.log("Cadena inicial: " + cadena + "\nConvertida a mayúsculas: " + convertirAMayusculas(cadena));
document.write(`<p>Cadena inicial: ${cadena} <br>Convertida a mayúsculas: ${convertirAMayusculas(cadena)}</p>`);