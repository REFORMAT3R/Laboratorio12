function filtrarArreglo(arr, callback1) {
    const resultado = [];
    for (let elemento of arr) {
        if (callback1(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
const numeros = [5, 10, 15, 20, 25];
const mayores = filtrarArreglo(numeros, function(num) {
    return num >= 15;
});
console.log(mayores.join(", ")); 
const pares = filtrarArreglo(numeros, function(num) {
    return num % 2 === 0;
});
console.log(pares.join(", "));