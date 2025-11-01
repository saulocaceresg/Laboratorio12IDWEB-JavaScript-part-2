// 18.	Crea una función media(...numeros) que calcule el promedio usando el operador rest

console.log("EJERCICIO 15 (18.)");
document.write(`<h3>Ejercicio 15</h3>`);

// La función
function media(...numeros) {
    let suma = 0;
    for (let i of numeros) { // Se usa for of para recorrer los números ingresados
        suma += i;
    }
    return suma / numeros.length;
}

console.log("Promedio de 12; 24; 10; 32: " + media(12, 24, 10, 32));
document.writeln(`<p>Promedio de 12; 24; 10; 32: <b>${media(12, 24, 10, 32)}</b></p>`);