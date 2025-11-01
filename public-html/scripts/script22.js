// 24.	Generador de secuencia aritmética (con closure y estado interno) 
// Crea una función crearSecuencia(inicio, paso) que devuelva otra función. 
// Cada vez que se invoque la función interna, debe devolver el siguiente número de la secuencia aritmética, aumentando por el valor de paso. No uses arreglos ni objetos para almacenar los valores anteriores.
// const secuencia = crearSecuencia(2, 3);
// console.log(secuencia()); // 2 
// console.log(secuencia()); // 5 
// console.log(secuencia()); // 8 
// console.log(secuencia()); // 11 
// … 

console.log("EJERCICIO 21 (24.)");
document.write(`<h3>Ejercicio 21</h3>`);

// Función crearSecuencia que aumenta el número inicial con el de paso
function crearSecuencia(inicio, paso) {
    let numero = inicio; // Alamacena el valor inicial en una nueva variable
    // Retorna una función para sumar
    return function accion() {
        // Salida de datos
        numero = numero + paso;
        console.log(numero);
        document.write(`Secuencia: ${numero}<br>`);
    }
}

const secuencia = crearSecuencia(2, 3);

// Salida de datos
console.log("Número inicial: " + 2 + "\nNúmero de paso: " + 3);
document.write(`<p>Número inicial: ${2}<br>Número de paso: ${3} </p>`);
secuencia();
secuencia();
secuencia();
secuencia();
secuencia();