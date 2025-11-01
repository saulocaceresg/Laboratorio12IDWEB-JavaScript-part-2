// 17.	Crea la función saludo(nombre = "Amigo") que devuelva un mensaje

console.log("EJERCICIO 14 (17.)");
document.write(`<h3>Ejercicio 14</h3>`);

// Función saludo
function saludo(nombre = "Amigo") {
    console.log(`Hola, ${nombre}, ¿cómo estás?`);
    document.write(`<p>Hola, ${nombre}, ¿cómo estás?</p>`);
}

saludo();