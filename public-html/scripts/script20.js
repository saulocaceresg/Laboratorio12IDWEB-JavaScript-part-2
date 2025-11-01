// 22.	Simula una función descargarArchivo(url, callback) que muestre "Descargando..." y luego llame al callback para mostrar "Descarga completa de [url]"

console.log("EJERCICIO 19 (22.)");
document.write(`<h3>Ejercicio 19</h3>`);

// Función para simular descarga
function descargarArchivo(url, callback) {
    console.log("Descargando...");
    document.write(`<p>Descargando...</p>`);
    callback(url);
}

// Salida de datos
descargarArchivo("archivo.pdf", enlace => {
    console.log(`Descarga completa de ${enlace}`);
    document.write(`Descarga completa de ${enlace}`);
});