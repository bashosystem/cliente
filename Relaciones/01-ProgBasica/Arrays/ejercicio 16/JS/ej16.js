let mesas;

function RecogerNum(msj) {
  let valido = false;
  let a;
  
  do {
    a = prompt(msj);
    if (isNaN(a) || a == "") alert("No valido");
    else valido = true;
  } while (valido == false);
  return Number(a);
}

function obtieneEnteroRandomIncluyendoExtremos(min, max) {
  const minTecho = Math.ceil(min);
  const maxSuelo = Math.floor(max);
  return Number(Math.floor(Math.random() * (maxSuelo - minTecho + 1) + minTecho));
}

function pintaArray(array) {
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
    resultado += " M" + i + ": " + array[i] + ",";
  }
  return resultado;
}

function iniciarMesas(numMesas) {
  mesas = new Array(numMesas);
  for (let i = 0; i < mesas.length; i++) {
    mesas[i] = obtieneEnteroRandomIncluyendoExtremos(0,4);
  }
  console.log(mesas);
  console.log("Disposición de mesas: " + pintaArray(mesas));
}

function hagoReserva() {
  let comensales = RecogerNum("¿Cuántos son? (introduzca un número negativo para salir)");

  if (comensales < 0) console.log("Programa finalizado.");
  else {
    // Validar número de comensales
    if (comensales > 4) alert(`Lo siento, no admitimos grupos de ${comensales}, haga grupos de 4 personas como máximo e intente de nuevo.`);
    else {
      // Intentar sentar a los comensales
      let mesaSentada = false;
      let mesaAsignada = 0;

      //Buscar mesa vacía
      for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] === 0) {
          mesas[i] = comensales;
          mesaSentada = true;
          mesaAsignada = i;
          
          console.log("Estado actual de las mesas:", mesas);
          break;
        }
      }

      //Si no encontró mesa vacía, buscar mesa con espacio
      if (!mesaSentada) {
        for (let i = 0; i < mesas.length; i++) {
          if (mesas[i] + comensales <= 4) {
            mesas[i] = comensales + mesas[i];
            mesaSentada = true;
            mesaAsignada = i;

            console.log("Disposición de mesas: " + pintaArray(mesas));
            break;
          }
        }
        if(!mesaSentada) {
          alert("Lo siento no tenemos disponibilidad para sentar a su grupo.");
          console.log("Disposición de mesas: " + pintaArray(mesas));
        }
      }
      if (mesaSentada) {
        console.log(`Grupo de ${comensales} sentados. Su mesa es: ${mesaAsignada + 1}`);
        console.log("Disposición de mesas: " + pintaArray(mesas));
      }
    }
  }
}

function iniciarRestaurante() {
  let numMesas = Number(RecogerNum("¿Cuántas mesas tiene el restaurante disponibles hoy?"));

  while (isNaN(numMesas) || numMesas <= 0)  numMesas = parseInt(RecogerNum("Por favor, introduzca un número válido de mesas:"));
  iniciarMesas(numMesas);
}

iniciarRestaurante();