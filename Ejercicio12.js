const operacionesMatematicas = () => {
    const sumar = (num1, num2) => num1+num2;
    const restar = (num1, num2) => num1-num2;
    const multiplicar = (num1, num2) => num1*num2;
    const dividir = (num1, num2) => num2 != 0 ? num1/num2 : "Error: división entre 0";
    return {
        sumar, restar, multiplicar, dividir
    }
}
const operaciones = operacionesMatematicas();
console.log("Suma:", operaciones.sumar(10, 5));           
console.log("Resta:", operaciones.restar(10, 5));         
console.log("Multiplicación:", operaciones.multiplicar(10, 5)); 
console.log("División:", operaciones.dividir(10, 5));     