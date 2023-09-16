const contenedor = document.querySelector('.contenedor-imagenes');
const imagenes = document.querySelectorAll('.imagen');

let indice = 0;

function cambiarImagen() {
    let porcentaje = (indice * -100); // Usar -100% para desplazar horizontalmente
    contenedor.style.transform = "translateX(" + porcentaje + "%)";
    indice++;

    if (indice === imagenes.length) {
        indice = 0; // Volver al principio si llegamos al final
    }

    setTimeout(() => {
        contenedor.style.transition = "none";
        contenedor.style.transform = "translateX(0)";
    }, 550);
    
    setTimeout(() => {
        contenedor.style.transition = "transform 0.5s ease-in-out";
    }, 550);
}

cambiarImagen(); // Cambiar a la primera imagen inmediatamente
setInterval(cambiarImagen, 6000); // Cambiar cada 3 segundos


