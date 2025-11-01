// 15.	Crea una función crearContador() que guarde un valor inicial y devuelva funciones para incrementar() y resetear()

console.log("EJERCICIO 12 (15.)");
document.write(`<h3>Ejercicio 12</h3>`);

let inicial, opcion;

// Ciclos do-while para verificar datos
do {
    opcion = parseInt(prompt("Elige una operación:\n(1) Incrementar\n(2) Resetear\n"));
    if (opcion < 1 || opcion > 2) {
        alert("OPCIÓN NO VÁLIDA.\nINGRESE DE NUEVO.");
    }
} while (opcion < 1 || opcion > 2);

do {
    inicial = parseInt(prompt("Ingrese el valor inicial"));
    if (isNaN(inicial)) {
        alert("OPCIÓN NO VÁLIDA.\nINGRESE DE NUEVO.");
    }
} while (isNaN(inicial));

// Funcion crearContador
function crearContador(inicial) {
    let cuenta = inicial;

    function incrementar() {
        cuenta++;
        return cuenta;
    }

    function resetear() {
        cuenta = inicial;
        return cuenta;
    }

    // Closure
    return function accion(opcion) {
        if (opcion === 1) return incrementar();
        if (opcion === 2) return resetear();
        return undefined;
    };
}

// Alamcenamiento de resultados
const contador = crearContador(inicial);

const resultado = contador(opcion);

// Para imprimir el resultado
let elegido = "";
switch (opcion) {
    case 1: console.log("Incrementar"); elegido = "Incrementar"; break;
    case 2: console.log("Resetear"); elegido = "Resetear"; break;
    default: console.log("OPCIÓN NO VÁLIDA") ; break;
}

// Salida de datos
console.log("Valor inicial: " + inicial + "\nOperación elegida: " + elegido + "\nResultado: " + resultado);
document.write(`<p>Valor incial: ${inicial}<br>Operación elegida: ${elegido}<br><b>Resultado:</b> ${resultado} </p>`);