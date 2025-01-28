function inicioDOM() {
  console.log("DOM cargado")

  document.body.style.backgroundColor = "cyan";

  // document.getElementById
  let titulo = document.getElementById("title");
  //innerHTML y textContent para que te salga el contenido del nodo
  console.log(titulo.innerHTML);
  console.log(titulo.textContent);
  console.log(titulo.textContent.length);
  
  // Seleccionar array de elementos
  let up_name = document.getElementsByName("up");
  console.log(up_name[0].textContent);
  console.log(up_name[1]);

  //Seleccionar elementos por nombre de etiqueta
  let parrafos = document.getElementsByTagName("p");
  console.log(parrafos);

  //Elementos de parrafos recorridos
  /* console.log(`Número de párrafos que tengo: ${parrafos.length}`);
  for (let i = 0; i < parrafos.length; i++) {
    if (i == 3) {
      parrafos[i].innerHTML = "Párrafo cambiado";
    }
    console.log(`Parrafo${i+1}: ${parrafos[i].innerHTML}`);
  } */

  //Elementos de la clase "parrafos"
  parrafos = document.getElementsByClassName("parrafos1");
  console.log(parrafos);
  for (let i = 0; i < parrafos.length; i++) {
    if (i == 3) {
      parrafos[i].innerHTML = "Párrafo cambiado";
    }
    console.log(`Parrafo${i+1}: ${parrafos[i].innerHTML}`);
  }

  //Selecciona primer ocurrencia de una etiqueta
  let parrafo1 = document.querySelector("p.parrafos1");
  console.log(parrafo1.innerHTML);

  //Igual pero con clases
  parrafo1 = document.querySelector(".projects p")
  console.log(parrafo1.innerHTML);

  //Seleccionar todas las ocurrencias
  let elementos = document.querySelectorAll("p.parrafos1");
  for (let i = 0; i < elementos.length; i++) {
    console.log(`Elemento${i+1}: ${elementos[i].innerHTML}`);
  }

  //Selecciono el DOM parcialmente.
  let sectionProjects = document.getElementById("proyectos");
  console.log(sectionProjects);
  elementos = sectionProjects.querySelectorAll("p.parrafos1");
  console.log(`Número de elementos que tengo. ${elementos.length}`);
  for (let i = 0; i < elementos.length; i++) {
    console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
  }
}
let estado = false;

function rojo (cabecera) {
  cabecera.style.color = cabecera.style.color === "red" ? "black" : "red";
}

//Vamos a modificar el Título 2 desde JS
function cambioSubtitulo (elemento) {
  elemento.style.color = (elemento.style.color === "orange") ? "pink" : "orange";
}

function cambioSubtitulo2() {
  let elemento = document.getElementById("subtitle");
  elemento.style.color = (elemento.style.color === "orange") ? "pink" : "orange";
}
//Llamo al evento "onclick" desde JS para cambiarle el color.
document.getElementById("subtitle").onclick = cambioSubtitulo2;

//Añado un listener para que cuando se haga "click" se ejecute la función "cambioSubtitulo3"
let titleh3 = document.getElementById("H3title");
titleh3.addEventListener("click", cambioSubtitulo3);
titleh3.addEventListener("dblclick", cambioSubtitulo3);

function cambioSubtitulo3() {
  let elemento = document.getElementById("H3title");
  elemento.style.color = (elemento.style.color === "orange") ? "pink" : "orange";
}

//Cambiar clase a un elemento
let c1 = document.getElementById("caja1");
c1.addEventListener("click", cambioClase1);

let c2 = document.getElementById("caja2");
c2.addEventListener("click", cambioClase2);

function cambioClase1 () {
  if (c1.classList.contains("caja--negra")) {
    c1.classList.remove("caja--negra");
    c1.classList.add("caja--roja");
  } else {
    c1.classList.remove("caja--roja");
    c1.classList.add("caja--negra");
  }
}
function cambioClase2 () {
  if (c2.classList.contains("caja--negra")) {
    c2.classList.remove("caja--negra");
    c2.classList.add("caja--roja");
  } else {
    c2.classList.replace("caja--roja", "caja--negra");
  }
}
