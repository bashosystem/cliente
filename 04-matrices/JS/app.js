// Matrices
let matriz = [];
// let i = prompt("Dime el tamaño de columna:");

// for (let j=0; j<i; j++){
//   matriz[j] = new Array(i);
// }

function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a)){
    a = prompt("Error: introduce un número (a): ")
  }
  return a;
}

function CreaYPintaMatriz(fila, columna){
  let matriz = new Array(columna);
  
  //Inicializamos matriz
  for(let i = 0; i < columna; i++){
    matriz[i] = new Array(fila);
  }

  //Rellenar valores
  for (let i = 0; i < fila; i++){
    for (let j = 0; j < columna; j++){
      matriz [i][j] = j;
    }
    console.log(matriz[i]);
  }
}

let fila = RecogerNum("Dime el tamaño de filas: ");
let columna = RecogerNum("Dime el tamaño de columnas:");

CreaYPintaMatriz(fila,columna);

autos = [['BMW1', 'BMW2','BMW3'],['Audi1','Audi2'],['Volvo']];
console.log(autos);
console.log(autos.length);
console.log(autos[0].length);
console.log(autos[1].length);
console.log(autos[2].length);


function PintaMatriz(autos){
  let resultado = "";

  //Rellenar valores
  for (let i = 0; i < autos.length; i++){
    for (let j = 0; j < autos[i].length; j++){
      resultado += autos[i][j] + ",";
    }
    console.log(resultado);
    resultado = "";
  }
}

PintaMatriz(autos);