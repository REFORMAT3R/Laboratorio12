function procesarTexto(cadena2) {
    function limpiarEspacios(cadena2){
        return cadena2.trim();
    }
    function contarPalabras (cadena2) {
        let palabras = cadena2.split(/\s+/);
        return palabras.length;
    }
    let textoLimpio = limpiarEspacios(cadena2);
    let totalPalabras = contarPalabras(textoLimpio);
    return totalPalabras;
}
console.log(procesarTexto("Brayan Daza Manrique"));