function descargarArchivo(url, callback2) {
    console.log("Descargando...");
    callback2();
}
function mostrarDescarga(url) {
    console.log("Descarga completa de " + url);
}
descargarArchivo("https://archivo.com/video.mp4", mostrarDescarga);