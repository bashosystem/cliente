//opción 1
let tdsOptima = document.querySelectorAll("td");

let colores = ["red", "blue", "green", "yellow"];

// opción 1. Opción recomendada
for (i=0; i<tdsOptima.length; i++){
    tdsOptima[i].onclick = function(){
        cambiaCelda(this);
    };
}

function cambiaCelda(celda) {
    //   if (celda.style.backgroundColor == "black")
    //     celda.style.backgroundColor = "white";
    //   else celda.style.backgroundColor = "black";
    switch (celda.style.backgroundColor) {
        case "red":
            celda.style.backgroundColor = colores[1];
            break;
        case "blue":
            celda.style.backgroundColor = colores[2];
            break;
        case "green":
            celda.style.backgroundColor = colores[3];
            break;
        default:
            celda.style.backgroundColor = colores[0];
            break;
    }
};

// opción 2 - CUTRE
//opción 2
// let tds = document.querySelectorAll("td");

// tds[0].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[1].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[2].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[3].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[4].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[5].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[6].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[7].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[8].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[9].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[10].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[11].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[12].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[13].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[14].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// tds[15].onclick = function () {
//     //   if (this.style.backgroundColor == "black")
//     //     this.style.backgroundColor = "white";
//     //   else this.style.backgroundColor = "black";
//     switch (this.style.backgroundColor) {
//         case "red":
//             this.style.backgroundColor = colores[1];
//             break;
//         case "blue":
//             this.style.backgroundColor = colores[2];
//             break;
//         case "green":
//             this.style.backgroundColor = colores[3];
//             break;
//         default:
//             this.style.backgroundColor = colores[0];
//             break;
//     }
// };

// opción Generando Nueva tabla
let btnNuevaTabla = document.getElementById('btnNuevaTabla');
btnNuevaTabla.addEventListener('click', creoTabla);

// función para crear la tabla
function creoTabla() {
    let tam = parseInt(prompt("Dime el tamaño de la nueva tabla a crear"));
    let seccionTabla = document.getElementById("incluirTabla");

    let nuevaTabla = document.createElement("table");
    nuevaTabla.classList.add("miTabla");
    nuevaTabla.id = "miTabla";
    let tablaBody = document.createElement("tbody");

    // nuevaTabla.style.width = "100%";
    nuevaTabla.setAttribute("border", 1);
    nuevaTabla.style.width = "300px";
    nuevaTabla.style.height = "300px";

    for (let i = 0; i < tam; i++) {
      let fila = document.createElement("tr");
      for (let j = 0; j < tam; j++) {
        let celda = document.createElement("td");

        // opción 1
        // let textoCelda = document.createTextNode(`Fila : ${i+1}, Columna: ${j+1}`);
        // celda.appendChild(textoCelda);
        // opción 2
        celda.innerHTML = `F:${i + 1}, C:${j + 1}`;
        // opción 3
        // celda.textContent = `F:${i+1}, C:${j+1}`;

        // Añadir un manejador de eventos para cambiar el color al hacer click
        // en la celda oportuna.
        celda.onclick = function () {
            cambiaCelda(this);
        };
        fila.appendChild(celda);
        // añado la celda que acabo de crear a la fila que estoy construyendo
      }
      tablaBody.appendChild(fila);
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla);
};

