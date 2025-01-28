console.log("Manejo elementos DOM");

/* 
Crear elementos en el DOM
.createElement(tag, options); // Crea y devuelve un elemento HTML
.createComment(text); // Crea y devuelve un nodo de comentarios HTML <!-- text -->
.createTextNode(text); // Crea y devuelve un nodo HTML con el texto text.
.cloneNode(deep); // Clona el nodo HTML y devuelve una copia. deep se envía false por defecto.
.isConnected; // Indica si el nodo HTML ya está insertado.
*/

let elemento = document.getElementById("boton1");
elemento.addEventListener("click", incluyoElemento);
elemento.addEventListener("dbclick", incluyoElemento);

function incluyoElemento() {
  // Crear un nuevo div y vamos a añadirle nuevo contenido
  let nuevoDiv = document.createElement("div");
  let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV");
  nuevoDiv.appendChild(nuevoContenido);

  console.log(nuevoDiv);
  // Añadir este nuevo elemento a la sección a la que queremos añadirlo
  let seccionActual = document.getElementById("seccionDivsAIncluir");
  // insertBefore(newNode, referenceNode);
  // document.body.insertBefore(nuevoDiv, seccionActual);
  seccionActual.appendChild(nuevoDiv);
}

let elemento2 = document.getElementById("boton2");
elemento2.addEventListener("click", incluyoElemento2);

function incluyoElemento2() {
  // Creamos un nuevo div y añadimos su contenido
  // createElement(tagName)
  let nuevoDiv = document.createElement("div");
  let nuevoContenido = document.createTextNode("Estoy incluyendo un nuevo contenido mediante un DIV-2");
  nuevoDiv.appendChild(nuevoContenido);

  // Añadimos el elemento que hemos creado y su contenido
  let actualDiv = document.getElementById("divAIncluir");
  actualDiv.innerHTML += nuevoDiv.outerHTML;
}

let elemento3 = document.getElementById("boton3");
elemento3.addEventListener("click", incluyoElemento3);

function incluyoElemento3() {
  // Creamos un div, asignamos estilos y añadimos su contenido
  let nuevoDiv = document.createElement("div");
  nuevoDiv.style.background = "blue";
  nuevoDiv.style.color= "white";
  let nuevoContenido = document.createTextNode("Estoy incluyendo un nuevo contenido mediante un DIV-3");
  nuevoDiv.appendChild(nuevoContenido);

  // Añadimos el elemento que hemos creado y su contenido
  let actualDiv = document.getElementById("seccionDivsAIncluir2");
  // document.body.insertBefore(nuevoDiv, actualDiv);
  actualDiv.appendChild(nuevoDiv);
}
/* Quiero asignarle Options
Object.assign(target, source1)

const elem = Object.assign(document.createElement("h1"), {className: "red", textContent: "red"});
document.body.appendChild(elem);
*/

let elemento4 = document.getElementById("boton4");
elemento4.addEventListener("click", incluyoElementoOptions);

function incluyoElementoOptions() {
  // Creamos un nuevo div y añadimos su contenido
  const nuevoDiv = Object.assign(document.createElement("div"), {className: "rojo", textContent: "Clase: roja."});
  let nuevoContenido = document.createTextNode("Estoy incluyendo un nuevo contenido mediante un DIV-1.");
  nuevoDiv.appendChild(nuevoContenido);

  // Añadimos el elemento que hemos creado y su contenido
  let actualSection = document.getElementById("seccionDivsAIncluir2");
  // document.body.insertBefore(nuevoDiv, actualSection);
  actualSection.appendChild(nuevoDiv, actualSection);
}

let elemento5 = document.getElementById("reemplazoChild");
elemento5.addEventListener("click", reemplazoChild);

function reemplazoChild() {
  // Recuperar el último hijo
  // let listItem = document.querySelector("li:last-child");
  // console.log(listItem);

  // Opción 2 recupero el Array de elementos de la lista
  let listItems = document.querySelectorAll("li");
  console.log("Numero de elementos: " + listItems.length);

  let listItem = listItems[listItems.length-1];
  console.log(listItem);

  let nuevoItem = document.createElement("li");
  // PREGUNTAR PROFE
  nuevoItem.innerHTML = '<a href="#">Productos</a>';
  console.log(nuevoItem);
  listItem.parentNode.replaceChild(nuevoItem, listItem);
}

function agregarDivConEnlaceEImagen() {
  // Pedir al usuario el URL de la imagen y el enlace
  var urlImagen = prompt("Por favor, introduce la URL de la imagen:", "./img/foto1.jpg");
  var urlEnlace = prompt("Por favor, introduce la URL del enlace:", "https://www.ejemplo.com");

  // Crear un nuevo div
  var nuevoDiv = document.createElement("div");

  // Crear un nuevo enlace
  var enlace = document.createElement("a");
  enlace.href = urlEnlace; // URL del enlace introducido por usuario
  enlace.textContent = "Información adicional"; // Texto del enlace

  // Crear una nueva imagen
  var imagen = document.createElement("img");
  imagen.src = urlImagen; // URL de la imagen introducida por usuario
  imagen.alt = "Imagen Dinámica"; // Texto alternativo de la imagen
  // imagen.style.width = "100px"; Ancho de la imagen
  // imagen.style.height = "100px"; Altura de la imagen

  // Agregar el enlace y la imagen al div
  nuevoDiv.appendChild(enlace);
  nuevoDiv.appendChild(imagen);

  // Agregar el nuevo div a la sección específica
  var seccion = document.getElementById("seccionDivsAIncluir2");
  seccion.appendChild(nuevoDiv);
}