const promedio = function(nota1, nota2, nota3) {
    if (
        nota1 < 0 || nota1 > 20 ||
        nota2 < 0 || nota2 > 20 ||
        nota3 < 0 || nota3 > 20
    ) {
        return "Error: Las notas deben estar entre 0 y 20.";
    }
    return (nota1 + nota2 + nota3) / 3;
}
console.log("Promedio: " + promedio(20, 13, 5).toFixed(2));