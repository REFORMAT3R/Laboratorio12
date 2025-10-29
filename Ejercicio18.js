function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: división por 0";
console.log("Suma: " + ejecutarOperacion(sumar, 10, 5));       
console.log("Resta: " + ejecutarOperacion(restar, 10, 5));      
console.log("Multiplicación: " + ejecutarOperacion(multiplicar, 10, 5)); 
console.log("División: " + ejecutarOperacion(dividir, 10, 5));     