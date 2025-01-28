function creoElementos() {
  let nuevoDiv = document.createElement("div");

  nuevoDiv.innerHTML = "1";
  document.body.appendChild(nuevoDiv);

  let sumar = document.createElement("button");
  let restar = document.createElement("button");

  sumar.innerHTML = "Sumar";
  restar.innerHTML = "Restar";

  document.body.appendChild(sumar);
  document.body.appendChild(restar);
}
creoElementos();

botones = document.querySelectorAll("button");
botones[0].addEventListener("click", suma);
botones[1].addEventListener("click", resta);

function suma() {
  let div1 = document.querySelector("div");
  let numero = Number(div1.innerHTML);
  numero++;
  div1.innerHTML = numero;
}
function resta() {
  let div1 = document.querySelector("div");
  let numero = Number(div1.innerHTML);
  numero--
  div1.innerHTML = numero;
}


