function crearSecuencia(inicio, paso) {
    let actual = inicio;
    return function() {
        let resultado = actual;
        actual += paso;
        return resultado;
    }
}
const secuencia = crearSecuencia(5, 3);
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 