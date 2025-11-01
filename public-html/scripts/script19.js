// 21. Crea una función filtrarArreglo(arr, callback) que devuelva los elementos que cumplan la condición del callback

console.log("EJERCICIO 18 (21.)");
document.write(`<h3>Ejercicio 18</h3>`);

// Declaración del arreglo
const arreglo = [3, -2, -4, 10, 0, -3, -8];
console.log("Arreglo original: " + arreglo);

// Función que filtra el arreglo a solo los pares negativos
function filtrarArreglo(arr, callback) {
    console.log("Procesando datos...");
    callback(arr);
}

// Salida de datos
document.write(`<p>Arreglo original: ${arreglo}<br> Números negativos pares:<br>`);
filtrarArreglo(arreglo, arreglo => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0 && arreglo[i] % 2 === 0) {
            console.log(arreglo[i]);
            document.write(arreglo[i] + "<br>");
        }
    }
})
document.write(`</p>`);