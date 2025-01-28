console.log("Aplicación calculadora");

//Añadimos el listener al boton sumar
let botonSumar = document.getElementById("btn_sumar");
botonSumar.addEventListener("click", sumar);

function sumar() {
  let formu = document.getElementById("formulario");
  console.log(formu);
  
  //Asignamos los valores del formulario
  let opA = formu["opA"];
  let opB = formu["opB"];
  console.log(opA);
  console.log(opB);
  console.log("Operando A:" + opA.value);
  console.log("Operando B:" + opB.value);

  let resultado = parseInt(opA.value) + Number(opB.value);
  let elemento = document.getElementById("resultado");

  //Si el resultado no es un numero, cambiamos el msj de resultado
  if (isNaN(resultado)) {
    elemento.innerHTML = "Datos introducidos NO númericos";

    // Opción 1
    // elemento.style.background = "red";
    // elemento.style.color= "white";

    // Opción 2
    // Eliminamos la clase y añadimos clase de alerta
    if (elemento.classList.contains("normal")) {
      elemento.classList.remove("normal");
    }
    elemento.classList.add("alerta");
  } else {
    elemento.innerHTML = `El resultado de la suma es: ${resultado}.`;

    // Opción 1
    // elemento.style.background = "green";
    // elemento.style.color = "white";

    // Opción 2
    // Eliminamos la clase y añadimos clase de alerta
    if (elemento.classList.contains("alerta")) {
      elemento.classList.remove("alerta");
    }
    elemento.classList.add("normal");
    // También tenemos replace(oldClass, newClass);

    let estilo = window.getComputedStyle(elemento);
    console.log("El background actual es: " + estilo.getPropertyValue("background"));
  
  }

  // Opción 2 para recorrer el array
  console.log("Recorro el array del formulario. Opción 1");
  for (let i = 0; i < formu.lenght; i++) {
    console.log(formu[i]);
    console.log(formu[i].value);
  }

  // Opción 3 para recorrer el array
  console.log("Recorro el array del formulario. Opción 2");
  let formulario = document.forms["formulario"];
  console.log(formulario);
  let texto="";
  for (let elemento of formulario) {
    console.log("Elemento: " + elemento);
    texto += elemento.value + "<br>";
  }
  console.log(texto);
  document.getElementById("resultado2").innerHTML = texto;
}