function CreaYPintaMatriz(matriz){
  tamanio = RecogerTamanio("Introduce un número de 2 a 5 (incluidos)");
  matriz = new Array(tamanio);
  
  for (let i = 0; i < tamanio; i++){
    matriz[i] = new Array(tamanio);
  }
  for (let i = 0; i < tamanio; i++){
    for (let j = 0; j < tamanio; j++){
      matriz[i][j] = CalcularRandom(1, 99);
    }
  }
  PintarMatriz(matriz);
  return matriz;
}

function PintarMatriz(matriz) {
  let resultado = "";
  
  for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
      if (matriz[i][j] < 10) resultado += `0${matriz[i][j]} `;
      else resultado += `${matriz[i][j]} `;
    }
    console.log(resultado);
    resultado = "";
  }
}

function RecogerTamanio(msj){
  let a = prompt(msj);
  while(isNaN(a) || (a > 5) || (a < 2)){
    a = prompt("ERROR: Introduce un número de 2 a 5 (incluidos)")
  }
  return a;
}

function RecogerOrdenacion(msj){
  let a = prompt(msj);
  while(isNaN(a) || (a > 1) || (a < 0)){
    a = prompt("ERROR: Introduce 0 o 1. (0: Orden ASC, 1: Orden DESC")
  }
  return a;
}

function CalcularRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CalcularMedia(matriz) {
  let media = 0;
  let numerosAlmacenados = 0;
  
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      numerosAlmacenados += matriz[i][j];
    }
  }
  media = numerosAlmacenados/(matriz.length * matriz.length);
  return media;
}

function CreaYPintaArraymedia(matriz) {
  let medias = [[],[]];
  let media = CalcularMedia(matriz);

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] > media) {
        medias[0].push(matriz[i][j]);
      }
      else { 
        medias[1].push(matriz[i][j]);
      }
    }
  }
  PintarMatriz(medias);
  return medias;
}

function OrdenarArray(matriz) {
  let opcion = RecogerOrdenacion("Introduce 0 o 1. (0: Orden ASC, 1: Orden DESC");

  if (opcion == 0) {
    matriz[0].sort(function(a,b){return a - b});
    matriz[1].sort(function(a,b){return a - b});
  }
  else {
    matriz[0].sort(function(a,b){return a - b});
    matriz[1].sort(function(a,b){return a - b});

    matriz[0].reverse();
    matriz[1].reverse();
  }
  PintarMatriz(matriz);
}

function InicializarEjercicio() {
  let matriz;
  let medias;

  console.log("La matriz generada con números aleatorios es: ")
  matriz = CreaYPintaMatriz(matriz);

  let media = CalcularMedia(matriz);

  console.log(`La media es: ${media}`);
  
  console.log("La matriz resultado es:");
  medias = CreaYPintaArraymedia(matriz);

  console.log("La matriz resultado ordenada es: ");
  OrdenarArray(medias);
}