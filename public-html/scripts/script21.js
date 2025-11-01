// 23.	Recursividad pura — Potencia sin ** ni Math.pow()
// Crea una función recursiva potencia(base, exponente) que calcule base elevado a exponente solo con multiplicaciones y recursión. No uses bucles ni estructuras de datos.

console.log("EJERCICIO 20 (23.)");
document.write(`<h3>Ejercicio 20</h3>`);

// Función recursiva
function potencia(base, exponente) {
    if (exponente === 0) return 1;
    if (exponente === 1) return base;
    if (exponente > 0) {
        return base * potencia(base, exponente - 1); // Va acumulando multiplicadores
    }
}

let base, exponente;

do {
    base = parseFloat(prompt("Ingrese un número:"));
    if (isNaN(base)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(base));

do {
    exponente = parseFloat(prompt("Ingrese el exponente:"));
    if (isNaN(exponente) || exponente < 0) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(exponente) || exponente < 0);

const resultado = potencia(base, exponente);

console.log("Base: " + base + "\nExponente: " + exponente + "\nResultado: " + resultado);
document.write(`<p>Base: ${base}<br>Exponente: ${exponente}<br><b>Resultado:</b> ${resultado}</p>`);