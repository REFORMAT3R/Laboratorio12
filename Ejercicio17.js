function mostrarDatos(nombre, edad, ...hobbies) {
    return "Datos: " + nombre + " (" + edad + ") "+ " Hobbies: " + hobbies.join(", ");
}
console.log(mostrarDatos("Camilo", 20, "Fútbol", "Música", "Videojuegos"));