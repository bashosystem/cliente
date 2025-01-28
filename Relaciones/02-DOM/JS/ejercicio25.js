console.log("Estoy");

let btnAgregarAntes = document.getElementById("btnAgregarAntes");
btnAgregarAntes.addEventListener("click", agregarAntes);

function agregarAntes() {
  let primerElem = document.getElementById("primerElemento");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea delante del 1er elemento";
  // Para agregar el elemento antes del primero que tengamos
  primerElem.before(nuevoElem);
}

let btnAgregarDespues = document.getElementById("btnAgregarDespues");
btnAgregarDespues.addEventListener("click", agregarDespues);

function agregarDespues() {
  let primerElem = document.getElementById("primerElemento");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea detrás del último elemento";
  // Para agregar el elemento detrás del último que tengamos
  primerElem.after(nuevoElem);
}

let btnAgregarAlinicio = document.getElementById("btnAgregarAlinicio");
btnAgregarAlinicio.addEventListener("click", agregarAlinicio);

function agregarAlinicio() {
  let elemPadre = document.getElementById("listaTareas");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea antes del 1er hijo";
  // Para agregar el elemento antes del 1er hijo
  elemPadre.prepend(nuevoElem);
}

let btnAgregarAlFinal = document.getElementById("btnAgregarAlFinal");
btnAgregarAlFinal.addEventListener("click", agregarAlFinal);

function agregarAlFinal() {
  let elemPadre = document.getElementById("listaTareas");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea despés del último hijo";
  // Para agregar el elemento después del último hijo
  elemPadre.append(nuevoElem);
}

let btnReemplazarElems = document.getElementById("btnReemplazarElems");
btnReemplazarElems.addEventListener("click", reemplazarElems);

function reemplazarElems() {
  let elemPadre = document.getElementById("listaTareas");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nuevo elemento que reemplaza a todos";
  // Para reemplazar todos los elementos por el que ponga
  elemPadre.replaceChildren(nuevoElem);
}

let btnReemplazarElem = document.getElementById("btnReemplazarElem");
btnReemplazarElem.addEventListener("click", reemplazarElem);

function reemplazarElem() {
  let primerElem = document.getElementById("primerElemento");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nuevo elemento reemplazador";
  // Para reemplazar el elemento por el nuevo
  primerElem.replaceWith(nuevoElem);
}

let btnEliminarElem = document.getElementById("btnEliminarElem");
btnEliminarElem.addEventListener("click", eliminarElem);

function eliminarElem() {
  let primerElem = document.getElementById("primerElemento");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nuevo elemento reemplazador";
  // Para reemplazar el elemento por el nuevo
  primerElem.remove;
}