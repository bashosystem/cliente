/**
 * EJERCICIO MATRICES
 * 
 * SOLICITO NFILAS NCOLUMNAS, POR CADA FILA
 * PIDO UN NÚMERO DEL CUÁL TENGO QUE SACAR SUS MÚLTIPLOS.
 * ADEMAS SI ES < 10 AGREGARLE UN "0" DELANTE.
 */

function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a) || (a > 9)){
    a = prompt("ERROR: Introduce valor númerico de 1 digito")
  }
  return a;
}


let nfilas = RecogerNum("Introduce numero de filas");
let ncolumnas = RecogerNum("Introduce numero de columnas");

function CrearRellenarMatriz(filas, columnas){
  let multiplos = new Array(columnas);
  
  //Inicializamos
  for(let i = 0; i < columnas; i++){
    multiplos[i] = new Array(filas);
  }

  let resultado = "";

  //Rellenar
  for (let i = 0; i < filas; i++){
    let multiplo = RecogerNum("Dime un numero:");
    for (let j = 0; j < columnas; j++){
      multiplos[i][j] = multiplo * (j+1); 
      if (multiplos[i][j] < 10){
        resultado += `0${multiplos[i][j]} `;
      }
      else resultado += `${multiplos[i][j]} `;
    }
    console.log(resultado);
    resultado = "";
  }
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRamdomInt(max){
  return Math.floor(Math.random() * max);
}

function CrearRellenarMatrizRandom(filas, columnas){
  let multiplos = new Array(columnas);
  
  //Inicializamos
  for(let i = 0; i < columnas; i++){
    multiplos[i] = new Array(filas);
  }

  let resultado = "";

  //Rellenar
  for (let i = 0; i < filas; i++){
    let multiplo = getRandomIntInclusive(1,9);
    for (let j = 0; j < columnas; j++){
      multiplos[i][j] = multiplo * (j+1); 
      if (multiplos[i][j] < 10){
        resultado += `0${multiplos[i][j]} `;
      }
      else resultado += `${multiplos[i][j]} `;
    }
    console.log(resultado);
    resultado = "";
  }
}

// CrearRellenarMatriz(nfilas, ncolumnas);
CrearRellenarMatrizRandom(nfilas, ncolumnas);
