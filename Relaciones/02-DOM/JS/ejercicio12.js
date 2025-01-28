function crearElems() {
  let container = document.createElement("div");
  let imag = document.createElement("img");
  container.style.height = "280px";
  imag.src = "../img/foto1.jpg";
  imag.style.position = "absolute";

  let boton1 = document.createElement("button");
  let boton2 = document.createElement("button");
  boton1.innerHTML = "Izquierda";
  boton2.innerHTML = "Derecha";

  container.appendChild(imag);
  document.body.appendChild(container);
  document.body.appendChild(boton1);
  document.body.appendChild(boton2);
}
crearElems();

let container = document.querySelector("div");
let botones = document.querySelectorAll("button");
let imag = document.querySelector("img");

distancia = 0;

botones[0].addEventListener("click", () => {
  distancia -= 5;
  imag.style.marginLeft = `${distancia}px`;
});
botones[1].addEventListener("click", () => {
  distancia += 5;
  imag.style.marginLeft = `${distancia}px`;
});

// SIN TERMINAR