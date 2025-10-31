// 7. Crea una función expresada promedio que reciba 3 notas y retorne su promedio

console.log("EJERCICIO 5 (7.)");
document.write(`<h3>Ejercicio 5</h3>`);

// Declaración de variables
let nota1, nota2, nota3;

// Ciclos do-while
do {
    nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    if (nota1 < 0 || nota1 > 20 || isNaN(nota1)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (nota1 < 0 || nota1 > 20 || isNaN(nota1));

do {
    nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    if (nota2 < 0 || nota2 > 20 || isNaN(nota2)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (nota2 < 0 || nota2 > 20 || isNaN(nota2));

do {
    nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    if (nota3 < 0 || nota3 > 20 || isNaN(nota3)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (nota3 < 0 || nota3 > 20 || isNaN(nota3));

// Función declarada promedio
const promedio = function (nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2);
}

// Salida de datos
console.log("Primera nota: " + nota1 + "\nSegunda nota: " + nota2 + "\nTercera nota: " + nota3);
console.log("Promedio: " + promedio(nota1, nota2, nota3));
document.write(`<p>Primera nota: ${nota1}<br>Segunda nota: ${nota2}<br>Tercera nota: ${nota3}<br><b>Promedio:<b/> ${promedio(nota1, nota2, nota3)} </p>`);