// 9. Crea una función expresada calcularDescuento(precio, porcentaje)

console.log("EJERCICIO 7 (9.)");
document.write(`<h3>Ejercicio 7</h3>`);

// Declaración de variables
let precio, porcentaje;

// Ciclos do-while
do {
    precio = parseFloat(prompt("Ingrese el precio del producto:"));
    if (precio < 0 || isNaN(precio)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (precio < 0 || isNaN(precio));

do {
    porcentaje = parseFloat(prompt("Ingrese el descuento:"));
    if (porcentaje < 0 || isNaN(porcentaje) || porcentaje > 100) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (porcentaje < 0 || porcentaje > 100 || isNaN(porcentaje));

// Función expresada calcularDescuento
const calcularDescuento = function (precio, porcentaje) {
    return precio * (100 - porcentaje) / 100; // Multiplica el precio por el resto del descuento: 5% -> 95% * precio
}

const resultado = calcularDescuento(precio, porcentaje);

// Salida de datos
console.log("Precio del producto: " + precio + "\nDescuento: " + porcentaje + "%" + "\nPrecio final: " + resultado);
document.write(`<p>Precio del producto: S/. ${precio}<br>Descuento: ${porcentaje}%<br><b>Precio final: S/. ${resultado}</b></p>`);
