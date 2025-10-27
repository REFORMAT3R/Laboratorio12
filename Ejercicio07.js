const calcularDescuento = function (precio, porcentaje) {
    return precio * (porcentaje/100);
}
console.log("Precio con descuento: " + calcularDescuento(100, 80));