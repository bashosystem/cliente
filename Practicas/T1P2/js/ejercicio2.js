function modificacion(mensaje) {
  let botonC = document.getElementsByClassName("limpiar")[0];
  botonC.style.backgroundColor = "red";
  botonC.style.color = "white";
}

function marcaDeNumeros() {
  let numeros = document.getElementsByClassName("numero");
  for (let i = 0; i < numeros.length; i++) {
    numeros[i].style.backgroundColor = "black";
    numeros[i].style.color = "white";
  }
}

function marcaDeOperadores() {
  let operadores = document.getElementsByClassName("operador");
  let igual = document.getElementsByClassName("igual")[0];
  for (let i = 0; i < operadores.length; i++) {
    operadores[i].style.backgroundColor = "yellow";
    operadores[i].style.color = "black";
  }
  igual.style.backgroundColor = "yellow";
  igual.style.color = "black";
}

let botonReset = document.getElementById("resetear");
botonReset.addEventListener("click", () => {
  let botonC = document.getElementsByClassName("limpiar")[0];
  botonC.style.backgroundColor = "#FF7C87";
  botonC.style.color = "#888888";

  let numeros = document.getElementsByClassName("numero");
  for (let i = 0; i < numeros.length; i++) {
    numeros[i].style.backgroundColor = "white";
    numeros[i].style.color = "#888888";
  }

  let operadores = document.getElementsByClassName("operador");
  let igual = document.getElementsByClassName("igual")[0];
  for (let i = 0; i < operadores.length; i++) {
    operadores[i].style.backgroundColor = "#FFDAB9";
    operadores[i].style.color = "#888888";
  }
  igual.style.backgroundColor = "#F1FF92";
  igual.style.color = "#888888";
})