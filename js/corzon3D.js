//Archivo para crear los corazones y darle un efecto 3d
let contenedor = document.getElementById("containerCorazon");

// Crear un elemento de imagen



// Obtener la posición y el tamaño del elemento en relación con la ventana del navegador
let rect = contenedor.getBoundingClientRect();

// Calcular la profundidad en el eje Z del elemento
let profundidadZ = 500;
console.log(profundidadZ)

for (let i = 0; i < profundidadZ; i += 12) {
    let imagen = document.createElement("img");

    // Establecer la ruta de la imagen
    imagen.src = "./img/corazonKatty.svg"; // Reemplaza con la ruta de tu imagen

    if(i <= profundidadZ / 2){
        let nuevoValorAncho =profundidadZ/2- i-10
        let nuevoValorProfundidad =-i +i/2
        imagen.style.transform = "translateZ(" + nuevoValorProfundidad  + "px)";
        imagen.style.width = nuevoValorAncho + "px";
        // Añadir la imagen al contenedor
        contenedor.appendChild(imagen);

    }else{
        let nuevoValorAncho =profundidadZ- i
        let nuevoValorProfundidad =(i -i/2)-120  
        imagen.style.transform = "translateZ(" +nuevoValorProfundidad + "px)";
        imagen.style.width = nuevoValorAncho + "px";
        // Añadir la imagen al contenedor
        contenedor.insertBefore(imagen, contenedor.firstChild);
    }
    
}



