// 10. Crea una función flecha saludo que reciba un nombre y devuelva un mensaje

console.log("EJERCICIO 8 (9.)");
document.write(`<h3>Ejercicio 8</h3>`);

let nombre = prompt("¿Cuál es su nombre?");

// En caso sea vacío
if (nombre.length === 0) {
    nombre = "Desconocido";
}

// Función flecha, compacta
const saludo = nombre => `¡Hola, ${nombre}!`;

// Salida de datos
console.log(saludo(nombre));
document.write(saludo(nombre));