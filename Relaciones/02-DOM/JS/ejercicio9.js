function creoElems() {
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "Clientes";
  parrafo.style.backgroundColor = "salmon";
  parrafo.style.border = "1px solid blue";
  parrafo.style.width = "300px";
  parrafo.style.height = "300px";
  parrafo.style.color = "blueviolet";
  parrafo.style.fontSize = "25px";
  document.body.appendChild(parrafo);
}
creoElems();

let parrafo = document.querySelector("p");
parrafo.addEventListener("click", () => {
  parrafo.style.backgroundColor = parrafo.style.backgroundColor === "salmon" ? "seagreen" : "salmon";
})