function creoElems() {
  let parrafo = document.createElement("p");
  parrafo.classList.add("uno");
  parrafo.innerHTML = "Clientes";
  document.body.appendChild(parrafo);
}
creoElems();

let parrafo = document.querySelector("p");

parrafo.addEventListener("click", ()=> {
  if (parrafo.classList.contains("uno")) {
    parrafo.classList.remove("uno");
    parrafo.classList.add("dos");
  } else {
    parrafo.classList.remove("dos");
    parrafo.classList.add("uno");
  }
});
