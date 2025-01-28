function crearElems() {
  let imag = document.createElement("img");
  imag.src = "../img/foto1.jpg";
  document.body.appendChild(imag);
}
crearElems();
let imag = document.querySelector("img");
imag.addEventListener("mouseenter", () => {
  imag.src = "../img/foto3.jpg";
});
imag.addEventListener("mouseleave", () => {
  imag.src = "../img/foto1.jpg";
});