//FUNCIONES SERVIBLES

//Funciones usadas
function recogeNombres(){
  array = prompt("Inserta diferentes nombres separados por ','");
  arraySeparado = array.split(",");
  return arraySeparado;
}
function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a) || (a > 9)){
    a = prompt("ERROR: Introduce valor númerico de 1 digito")
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

//Funciones de Random

// Número aleatorio < max
function getRamdomInt(max){
  return Math.floor(Math.random() * max);
}
// Número aleatorio entre el > min y < max
function getRandomArbitrary(min,max){
  return Math.random() * (max - min) + min;
}
//Número aleatorio entre el >= min y <= max
function getRandomEnteros(min, max) {
  return Math.random() * (max - min + 1) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}