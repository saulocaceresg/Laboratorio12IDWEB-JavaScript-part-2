// 16.	Crea una función acumulador(valorInicial) que devuelva una función para sumar nuevos valores

console.log("EJERCICIO 13 (16.)");
document.write(`<h3>Ejercicio 13</h3>`);

let numero, nuevo;

// Función acumulador
function acumulador(valorInicial) {
    let inicial = valorInicial;

    function sumar(nuevoValor) {
        inicial = inicial + nuevoValor // Sobreescribe el valor inicial guardado en otra variables
        return inicial;
    }

    return function accion(nuevo) {
        return sumar(nuevo);
    }
}

// Ciclos do while para verficar validez
do {
    numero = parseFloat(prompt("Ingrese un valor inicial:"));
    if (isNaN(numero)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(numero));

const resultado = acumulador(numero);
console.log("Valor inicial: " + numero);

// Salida de datos
document.write(`<p>Valor inicial: ${numero}<br><b>Incremento:<br></b>`);

let salir = false; // Bandera para verificar si ya salió

do { // do while para que se agreguen varios números
    nuevo = prompt("Ingrese un nuevo valor a sumar o escriba 'q' para salir:");
    if (nuevo === "q") {
        break;
    }
    
    // Ciclo while para verificar nueva condición (cuando no es número y está vacío)
    while ((isNaN(parseFloat(nuevo)) || nuevo === "") && nuevo != "q") {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
        nuevo = prompt("Ingrese un nuevo valor a sumar o escriba 'q' para salir:");
        if (nuevo === "q") {
            salir = true;
            break;
        }
    }

    if (salir) break;

    nuevo = parseFloat(nuevo); // Se convierte a float, pues solo es string hasta ahora

    // Salida de datos
    let incrementado = resultado(nuevo);
    console.log("Suma: " + incrementado);
    document.write("Nuevo valor: " + incrementado + "<br>");
} while (true);

document.write(`</p>`);