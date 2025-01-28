console.log("javascript");

let creaAnuncio = document.getElementById("incluyeAnuncio");

creaAnuncio.addEventListener("click", incluirAnuncio);

function incluirAnuncio() {
  //Pedir al usuario la dirección de la imagen y el enlace
  let pathImg = prompt("Dirección de la imagen", "./img/foto1.jpg");
  let urlEnlace = prompt("Dirección de la imagen", "https://www.marca.es");

  //Crear un div al que le vamos añadiendo nuestros child
  let nuevoHijo = document.createElement("div");

  //Creo el enlace
  let enlace = document.createElement("a");
  enlace.href = urlEnlace;
  enlace.textContent = prompt("Dime el texto del enlace");

  //Crea la imagen
  let imagen = document.createElement("img");
  imagen.src = pathImg;
  imagen.alt = prompt("Dime el alt de la imagen");
  imagen.style.width = "100px";
  imagen.style.height = "100px";

  //Agregar a nuestro hijo (div)
  nuevoHijo.appendChild(imagen);
  nuevoHijo.appendChild(enlace);

  let seccion = document.getElementById("seccionArticles");
  seccion.appendChild(nuevoHijo);
}

let creaArticulo = document.getElementById("incluyeArticulo");
creaArticulo.addEventListener("click", incluirArticulo);

function incluirArticulo () {
  // Pido al usuario título, descripción, fecha del artículo y una categoría
  let titulo = prompt("Dime el título del artículo");
  let descripción = prompt("Dime la descripción del artículo");
  let fechaArticulo = prompt("Dime la fecha de la descripción del artículo");
  let catArticulo = prompt("Dime la categoría del artículo");

  let nuevoArticulo = document.createElement("article");
  nuevoArticulo.classList.add("articles__article");

  nuevoArticulo.innerHTML = `<div class="article__datos">
                                <span>${fechaArticulo}</span>
                                <span>${catArticulo}</span>
                              </div>`;
  let nuevoSubtitulo = document.createElement("h4");
  nuevoSubtitulo.classList.add("article__subtitle");
  nuevoSubtitulo.innerHTML = `<a href="#">${titulo}</a>`;

  let nuevoP = document.createElement("p");
  nuevoP.textContent = descripción;

  nuevoArticulo.appendChild(nuevoSubtitulo);
  nuevoArticulo.appendChild(nuevoP);

  let seccion = document.getElementById("seccionArticles");
  seccion.appendChild(nuevoArticulo);
}

function incluirArticulo2 () {
  // Pido al usuario título, descripción, fecha del artículo y una categoría
  let titulo = prompt("Dime el título del artículo");
  let descripción = prompt("Dime la descripción del artículo");
  let fechaArticulo = prompt("Dime la fecha de la descripción del artículo");
  let catArticulo = prompt("Dime la categoría del artículo");

  let nuevoArticulo = document.createElement("article");
  nuevoArticulo.classList.add("articles__article");

  nuevoArticulo.innerHTML = `<div class="article__datos">
                                <span>${fechaArticulo}</span>
                                <span>${catArticulo}</span>
                              </div>
                              <h4 class="article__subtitle>
                                <a href="#">${titulo}</a>
                              </h4>
                              <p>${descripción}</p>`;

  let seccion = document.getElementById("seccionArticles");
  seccion.appendChild(nuevoArticulo);
}