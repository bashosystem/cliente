let generar = document.getElementById("btnGenerarTabla");

generar.addEventListener("click", () => {

let filas = RecogerNum("Dime el numero de filas");
let celdas = RecogerNum("Dime el numero de celdas por fila");

let nuevaTabla = document.createElement("table");
nuevaTabla.style.width = "100%";
nuevaTabla.setAttribute("border", 1);

let nuevoTbody = document.createElement("tbody");

for (let i = 0; i < filas; i++) {
  let fila = document.createElement("tr");
  for (let j = 0; j < celdas; j++) {
    let celda = document.createElement("td");
    celda.style.width = "300px";
    celda.style.height = "15px";
    celda.onclick = function () {
      cambiarImagen(this);
    }
    fila.appendChild(celda);
  }
  nuevoTbody.appendChild(fila);
}
nuevaTabla.appendChild(nuevoTbody);

let seccion = document.getElementById("seccionTabla");
seccion.appendChild(nuevaTabla);
})

function cambiarImagen (celda) {
let imag = document.createElement("img");
    imag.setAttribute("src", "./img/foto1.jpg");
    if (celda.style.width == "300px") {
      celda.appendChild(imag);
    } else {
      celda.replaceChild(imag);
      switch (imag.src) {
        case "./img/foto1.jpg":
        imag.setAttribute("src", "./img/foto2.jpg");
        break;
      case "./img/foto2.jpg":
        imag.setAttribute("src", "./img/foto3.jpg");
        break;
      case "./img/foto3.jpg":
        imag.setAttribute("src", "./img/foto4.jpg");
        break;
      case "./img/foto4.jpg":
        imag.setAttribute("src", "./img/foto5.jpg");
        break;
      case "./img/foto5.jpg":
        imag.setAttribute("src", "./img/foto1.jpg");
      }
    }
}

function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a) || (a > 10)){
    a = prompt("ERROR: Introduce valor númerico inferior o igual a 10");
  }
  return Number(a);
}