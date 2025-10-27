function crearContador() {
    let valorInicial = 0;
    function incrementar() {
        valorInicial++;
        return valorInicial;
    }
    function resetear() {
        valorInicial = 0;
        return valorInicial;
    }
    return {
        incrementar, resetear
    }
}
let contador = crearContador();
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.resetear());
console.log(contador.incrementar());