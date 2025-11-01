// 20.	Crea una función ejecutarOperacion(fn, x, y) donde fn sea una función aritmética

console.log("EJERCICIO 17 (20.)");
document.write(`<h3>Ejercicio 17</h3>`);

// Funcion aritmética para seleccionar el operador
function funcionAritmetica (opcion) {
    switch (opcion) {
        case 1: return "+";
        case 2: return "-";
        case 3: return "*";
        case 4: return "/";
        default: undefined; break;
    }
}

// Función ejecutarOperacion que muestra la función
function ejecutarOperacion(fn, x, y) {
    console.log("f(x, y) = " + x + " " + fn + " " + y);
    document.write(`<p>f(x, y) = ${x} ${fn} ${y}</p>`);
}

// Ciclo do-while para elegir la opción
let opcion;
do {
    opcion = prompt("Elija una función a mostrar:\n(1) Función Suma\n(2) Función Resta\n(3) Función Multiplicación\n(4) Función división");
    // Si está vació o es espacio en blanco, lo ignora
    if (opcion === null || opcion.trim() === "") {
        alert("DEBE INGRESAR UNA OPCIÓN.");
        continue;
    }
    
    opcion = parseFloat(opcion);

    // Valida la opción
    if (opcion <= 0 || opcion > 4 || isNaN(opcion)) {
        alert("OPCIÓN NO VÁLIDA.\nINGRESE DE NUEVO.");
    }
} while (opcion <= 0 || opcion > 4 || isNaN(opcion));

// Salida de datos
ejecutarOperacion(funcionAritmetica(opcion), "x", "y");