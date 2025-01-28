contenedor = document.getElementById("contenedor");
botonAniadir = document.getElementById("botonAniadir");
botonLimpiar = document.getElementById("botonLimpiar");

let rutaImagen;
let imagen;

botonAniadir.addEventListener("click", function(){
    rutaImagen = prompt("Dime la ruta de tu imagen:");
    imagen = document.createElement("img");

    if (!rutaImagen) imagen.src = "./img/bloodborne.jpg";
    else imagen.src = "./img/" + rutaImagen;
    imagen.classList.add("foto");

    contenedor.appendChild(imagen);
    botonLimpiar.disabled = false;
});


botonLimpiar.addEventListener("click", function(){
    let imagenes = contenedor.querySelectorAll("img");
    for (let i = 0; i < imagenes.length; i++) {
        contenedor.removeChild(imagenes[i]);
    }
    botonLimpiar.disabled = true;
});