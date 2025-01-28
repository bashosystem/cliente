// Importar funciones
import {saludar, despedida} from "../06-import/JS/saludos.js";

// Exportar funciones
export function ejemplo(nombre) {
  return `Hasta luego, ${nombre}`;
}

export{saludar, despedida};


// Eliminar y añadir clases
if (elemento.classList.contains("normal")) {
  elemento.classList.remove("normal");
  elemento.classList.add("alerta");
  // También tenemos replace(oldClass, newClass);
}

// window.getComputedStyle No sé exactamente el funcionamiento
let estilo = window.getComputedStyle(elemento);
estilo.getPropertyValue("background");

// Crear e incluir elementos
let nuevoDiv = document.createElement("div");
let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV");
nuevoDiv.appendChild(nuevoContenido);

// Object.assign
Object.assign(document.createElement("div"), {className: "rojo", textContent: "Clase: roja."});

// Crear tabla
function creoTabla() {
  let tam = RecogerNum("Dime el tamaño de la matriz:")

  let seccionTabla = document.getElementById("seccionTabla");

  let nuevaTabla = document.createElement("table");
  let tablaBody = document.createElement("tbody");

  nuevaTabla.style.width = "100%";
  nuevaTabla.setAttribute("border", 1);

  for (let i = 0; i < tam; i++) {
    let fila = document.createElement("tr");
    for (let j = 0; j < tam; j++) {
      let celda = document.createElement("td");
      
      //Opción 1
      // let textoCelda = document.createTextNode(`Fila: ${i+1}, Columna: ${j+1}`);
      // celda.appendChild(textoCelda);

      //Opción 2
      celda.innerHTML = `F:${i+1}, C:${j+1}`;

      //Opción 3
      // celda.textContent = `F:${i+1}, C:${j+1}`;

      // Añadir un manejador de eventos para cambiar el color al hacer click
      // en la celda oportuna.
      celda.onclick = function() {
        // Con this le envio la variable que tenemos seleccionada, "celda" en este caso
        cambiarColorCelda(this);
      };
      // Añado la celda que acabo de crear a la fila
      fila.appendChild(celda);
    }
    // Añado la fila al tbody
    tablaBody.appendChild(fila);
  }
  // Añado el tbody al table
  nuevaTabla.appendChild(tablaBody);
  // Añado el table al section
  seccionTabla.appendChild(nuevaTabla);
}

// Uso de operador ternario
celda.style.backgroundColor = celda.style.backgroundColor === "blue" ? "green" : "blue";

// DOM cargado
// addEventListener("load", contarEnlaces);
document.addEventListener("DOMContentLoaded", () => {
  alert("DOM cargado.");
});

// Cookies habilitadas
if (navigator.cookieEnabled) texto = "Cookies habilitadas";
else texto = "Cookies inhabilitadas";

// Abreviar consultas
let resultado = document.getElementsByTagName("p")[2].getElementsByTagName("a");

// USO DE querySelector
// Selecciona primer ocurrencia de una etiqueta
let parrafo1 = document.querySelector("p.parrafos1");
console.log(parrafo1.innerHTML);

// Igual pero con clases
parrafo1 = document.querySelector(".projects p")
console.log(parrafo1.innerHTML);

// SELECCIÓN DE CHILDS
// <!-- Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento.
listadoPrincipal[1].lastChild.remove();
// Para agregar el elemento antes del primero que tengamos
primerElem.before(nuevoElem);
// Para agregar el elemento detrás del último que tengamos
primerElem.after(nuevoElem);
// Para agregar el elemento antes del 1er hijo
elemPadre.prepend(nuevoElem);
// Para agregar el elemento después del último hijo
elemPadre.append(nuevoElem);
// Para reemplazar todos los elementos por el que ponga
elemPadre.replaceChildren(nuevoElem);
// Para reemplazar el elemento por el nuevo
primerElem.replaceWith(nuevoElem);
// Para reemplazar el elemento por el nuevo
primerElem.remove//(nuevoElem);

// Timer
// Va dentro de una función a la que llamamos anteriormente en un Listener
timer = setInterval(function(){
  let velocidad1 = parseInt(estilo1.getPropertyValue("left")) + velocidades[0];
  let velocidad2 = parseInt(estilo2.getPropertyValue("left")) + velocidades[1];
  let velocidad3 = parseInt(estilo3.getPropertyValue("left")) + velocidades[2];
  let velocidad4 = parseInt(estilo4.getPropertyValue("left")) + velocidades[3];
  
  if (!final) {
    corredores[0].style.setProperty("left", velocidad1 + "px");
    corredores[1].style.setProperty("left", velocidad2 + "px");
    corredores[2].style.setProperty("left", velocidad3 + "px");
    corredores[3].style.setProperty("left", velocidad4 + "px");

    //Opcion 2 (más rápida) (sin adaptar a la anterior)
    // corredores[0].style.left = corredores[0].style.left + velocidades[0] + "px";
    // corredores[1].style.left = corredores[1].style.left + velocidades[1] + "px";
    // corredores[2].style.left = corredores[2].style.left + velocidades[2] + "px";
    // corredores[3].style.left = corredores[3].style.left + velocidades[3] + "px";

    if (parseInt(corredores[0].style.getPropertyValue("left")) >= 1080) {
      final = true;
      alert("Ha ganado div 1");
    }
    if (parseInt(corredores[1].style.getPropertyValue("left")) >= 1080) {
      final = true;
      alert("Ha ganado div 2");
    }
    if (parseInt(corredores[2].style.getPropertyValue("left")) >= 1080) {
      final = true;
      alert("Ha ganado div 3");
    }
    if (parseInt(corredores[3].style.getPropertyValue("left")) >= 1080) {
      final = true;
      alert("Ha ganado div 4");
    }
  }
  else {
    // Para parar el timer;
    clearInterval(timer);
  }
}, 50); 