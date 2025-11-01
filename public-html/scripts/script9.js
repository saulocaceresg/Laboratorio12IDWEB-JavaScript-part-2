// 11.	Crea una función flecha esPositivo que indique si un número es mayor a 0

console.log("EJERCICIO 9 (11.)");
document.write(`<h3>Ejercicio 9</h3>`);

let numero;

// Ciclo do while para verificar que sea número
do {
    numero = parseFloat(prompt("Ingrese un número:"));
    if (isNaN(numero)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(numero));

// Función flecha esPositivo

const esPositivo = numero => {
    if (numero === 0) {
        return "ES 0"
    } else {
        return numero > 0 ? "ES MAYOR A 0" : "NO ES MAYOR A 0";
    }
}

// Salida de datos
console.log("Número ingresado: " + numero + "\nResultado: El número " + esPositivo(numero));
document.write(`<p>Número ingresado: ${numero}<br><b>Resultado:</b> El número ${esPositivo(numero)}</p>`);