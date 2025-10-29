function acumulador(valorInicial) {
    let total = valorInicial;
    return function(nuevoValor) {
        total += nuevoValor;
        return total;
    }
}
const miAcumulador = acumulador(10);
console.log(miAcumulador(5));  
console.log(miAcumulador(3));  
console.log(miAcumulador(7))