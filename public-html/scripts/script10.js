// 12.	Crea una función flecha componerTransformaciones que reciba dos funciones flecha de texto, y devuelva una nueva función flecha que aplique ambas en secuencia al texto ingresado. Para mayúsculas (convierte todo el parámetro en mayúsculas) y la otra agregarSigno (aumenta “!” al final del parámetro).
// console.log(transformar("hola")); // "HOLA!"

console.log("EJERCICIO 10 (12.)");
document.write(`<h3>Ejercicio 10</h3>`);

let texto;

do {
    texto = prompt("Escribe algo:");
    if (texto.length === 0) {
        alert("DATO NO VÁLIDO: Texto vacío.\nINGRESE DE NUEVO.");
    }
} while (texto.length === 0);

// Primera función flecha "mayusculas"
const mayusculas = texto => texto.toUpperCase();

// Segunda función flecha "agregarSigno"
const agregarSigno = texto => texto + "!";

// Función flecha que usa las dos funciones y devuelve una flecha
const componerTransformaciones = (cadena) => transformar = () => agregarSigno(mayusculas(cadena));

// Salida de datos
console.log("Resultado: "+ componerTransformaciones(texto)());
document.write(`<p>Texto original: ${texto}<br>Tranformado: ${componerTransformaciones(texto)()} </p>`)