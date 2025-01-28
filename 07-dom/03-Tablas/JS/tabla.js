let tabla = document.getElementById("generaTabla");
tabla.addEventListener("click", creoTabla);

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

function cambiarColorCelda(celda) {
  celda.style.backgroundColor = celda.style.backgroundColor === "blue" ? "green" : "blue";
}

function RecogerNum(msj) {
  let valido = false
  let a
  do {
      a = prompt(msj)
      if (isNaN(a) || a == "") {
          alert("No valido")
      } else {
          valido = true
      }
  } while (valido == false)
  return Number(a);
}