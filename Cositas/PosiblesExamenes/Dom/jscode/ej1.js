let genera = document.querySelectorAll("input")[0];
let compara = document.querySelectorAll("input")[1];

genera.addEventListener("click", () => {
  let ladoIzq = document.getElementById("ladoIzq");
  let ladoDer = document.getElementById("ladoDer");

  let salida = document.getElementById("salida");
  salida.innerText = "";
  ladoIzq.innerText = getRandomIntInclusive(1, 50);
  ladoDer.innerText = getRandomIntInclusive(1, 50);

  genera.disabled = true;
  compara.disabled = false;
})

compara.addEventListener("click", () => {
  let ladoIzq = document.getElementById("ladoIzq");
  let ladoDer = document.getElementById("ladoDer");

  let salida = document.getElementById("salida");
  if (Number(ladoIzq.innerText) > Number(ladoDer.innerText)) salida.innerText = ladoIzq.innerText;
  else salida.innerText = ladoDer.innerText;
  
  genera.disabled = false;
  compara.disabled = true;
})

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}