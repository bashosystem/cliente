let agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click", () => {

  let lista = document.getElementById("listaDinamica");
  
  let elemento = document.createElement("li");
  let textoElem = prompt("Introduce el texto del elemento", "Nombre de la página web");
  elemento.textContent = textoElem;

  let enlace = document.createElement("a");
  let textoEnlace = prompt("Introduce la URL de la página", "https://ejemplo.com");
  enlace.href = textoEnlace;

  elemento.appendChild(enlace);
  lista.appendChild(elemento);
})

let borrar = document.getElementById("btnBorrar");
borrar.addEventListener("click", () => {

  let lista = document.getElementById("listaDinamica");
  lista.innerHTML = "";
})