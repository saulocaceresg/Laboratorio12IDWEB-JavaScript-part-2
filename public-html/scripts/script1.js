// 3. Crea una función esPar(num) que devuelva true si el número es par

console.log("EJERCICIO 1 (3.)");
document.write(`<h3>Ejercicio 1</h3>`);

// Declaración de variables
let numero = parseFloat(prompt("Ingrese un número entero"));
numero = Math.floor(numero); // Redondeo

// Función esPar
function esPar(num) {
    return num % 2 === 0;
}

// Salida de datos
console.log("Número ingresado: " + numero);
console.log((esPar(numero) === true ? "El número ES PAR" : "El número NO ES PAR"));
document.write(`<p>Número ingresado: ${numero}<br>${(esPar(numero) === true ? "El número <b>ES PAR</b>" : "El número <b>NO ES PAR</b>")} </p>`);
