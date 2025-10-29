function media(...numeros) {
    if (numeros.length === 0) {
        return "Error: no se ingresaron números.";
    }
    let suma = 0;
    for (let num of numeros) {
        suma += num;
    }
    return suma / numeros.length;
}
console.log(media());  
console.log(media(10, 20, 30));  