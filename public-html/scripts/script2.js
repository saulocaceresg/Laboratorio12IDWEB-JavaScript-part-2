// 4. Crea una función areaRectangulo(base, altura) que retorne el área 

console.log("EJERCICIO 2 (4.)");
document.write(`<h3>Ejercicio 2</h3>`);

// Declaración de variables
let base, altura;

// Ciclos do-while para verficar lo ingresado
do {
    base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    if (base <= 0 || isNaN(base)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO")
    }
} while (base <= 0 || isNaN(base));

do {
    altura = parseFloat(prompt("Ingrese la altura del rectángulo"));
    if (altura <= 0 || isNaN(altura)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO")
    }
} while (altura <= 0 || isNaN(altura));

// Función areaRectangulo
function areaRectangulo(base, altura) {
    return base * altura;
}
const area = areaRectangulo(base, altura);

// Salida de datos
console.log("Base: " + base + "\nAltura: " + altura);
console.log("Área del rectángulo: " + area);
document.write(`<p>Base: ${base}<br>Altura: ${altura}<br><b>Área del rectángulo:</b> ${area} </p>`);