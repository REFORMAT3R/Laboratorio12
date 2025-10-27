const mayusculas = (cadena1) => {
    return cadena1.toUpperCase();
}
const signo = (cadena1) => {
    return cadena1 + "!";
}
const componerTransformaciones = (funcion1, funcion2) => {
    return (texto) => funcion2(funcion1(texto));
}
const transformar = componerTransformaciones(mayusculas, signo);
console.log(transformar("hola mundo"));