let agregar = document.getElementById("btnAgregarDivImagen");
agregar.addEventListener("click", () => {
  
  let seccion = document.getElementById("seccionDinamica");
  
  let contenedor = document.createElement("div");
  contenedor.classList.add("caja");

  let titulo = document.createElement("h2");
  let nombreTitulo = prompt("Introduce el título");
  titulo.textContent = nombreTitulo;

  let imag = document.createElement("img");
  let urlImag = prompt("Introduce la URL de la imagen", "./img/foto1.jpg");
  imag.src = urlImag;

  let enlace = document.createElement("a");
  let urlEnlace = prompt("introduce la URL del enlace", "https://ejemplo.com");
  enlace.href = urlEnlace;
  enlace.textContent = "Ver más";

  contenedor.appendChild(titulo);
  contenedor.appendChild(imag);
  contenedor.appendChild(enlace);
  seccion.appendChild(contenedor);
})

let resetear = document.getElementById("btnResetearSeccion");
resetear.addEventListener("click", () => {

  let seccion = document.getElementById("seccionDinamica");

  seccion.replaceChildren();
})