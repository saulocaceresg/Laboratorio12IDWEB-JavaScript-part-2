// 19.	Crea mostrarDatos(nombre, edad, ...hobbies) que muestre todos los datos

console.log("EJERCICIO 16 (19.)");
document.write(`<h3>Ejercicio 16</h3>`);

// Función mostrarDatos
function mostrarDatos(nombre, edad, ...hobbies) {
    console.log("Nombre: " + nombre + "\nEdad: " + edad + "\nHobbies:");
    document.write(`<p><b>Nombre:</b> ${nombre}<br><b>Edad:</b> ${edad}<br><b>Hobbies:</b><br>`);
    for (let i of hobbies) {
        // Se imprimern los valores de hobbies
        console.log(i);
        document.write(" - " + i + "<br>");
    }
}

let nombre, edad;

// Ciclos do-while para verificar la validez de los datos
do {
    nombre = prompt("Ingrese su nombre:");
    if (nombre.length === 0) {
        alert("DATO NO VÁLIDO: Vacío.\nINGRESE DE NUEVO.")
    }
} while (nombre.length === 0);

do {
    edad = parseFloat(prompt("Ingrese su edad:"));
    if (edad <= 0 || isNaN(edad)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (edad <= 0 || isNaN(edad));

// Salida de datos
mostrarDatos(nombre, edad, "Leer", "Jugar videojuegos", "Imaginar escenarios ficticios");
document.write(`</p>`);