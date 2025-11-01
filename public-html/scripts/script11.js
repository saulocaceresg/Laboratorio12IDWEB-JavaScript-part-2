// 13.	Crea una función procesarTexto que tenga una función interna limpiarEspacios y otra contarPalabras

console.log("EJERCICIO 10 (12.)");
document.write(`<h3>Ejercicio 10</h3>`);

let texto;

do {
    texto = prompt("Escribe algo:");
    if (texto.length === 0) {
        alert("DATO NO VÁLIDO: Texto vacío.\nINGRESE DE NUEVO.");
    }
} while (texto.length === 0);

// Función procesarTexto
const procesarTexto = function (texto) {
    // Función limpiarEspacios
    function limpiarEspacios() {
        texto = texto.replace(/\s/g, '').trim();
        return texto;
    }

    // Función contarPalabras
    function contarPalabras() {
        const cadenaTrim = texto.trim(); // Elimina los espacios de los extremos
        if (cadenaTrim === "") {
            return 0;
        }
        const palabras = cadenaTrim.split(/\s+/); // Divide la cadena en espacios

        return palabras.length;
    }
    let cantidad = contarPalabras();
    texto = limpiarEspacios();
    const datos = [texto, cantidad];
    return datos // Retorna un arreglo para mejor organización
}

const datos = procesarTexto(texto);

// Salida de datos
console.log("Cadena original: " + texto + "Cantidad de palabras: " + datos[1] + "\nCadena limpia: " + datos[0]);
document.write(`<p>Cadena original: [${texto}]<br>Cantidad de palabras: ${datos[1]}<br>Cadena limpia: ${datos[0]}</p>`);