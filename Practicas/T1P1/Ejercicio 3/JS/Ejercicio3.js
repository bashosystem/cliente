function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a) || (a < 5) || (a > 10)){
    a = prompt("ERROR: introduce un número de 5 a 10 (incluidos)");
  }
  return a;
}

function CalcularRandom(numero) {
  let random = Math.floor(Math.random() * 100) * numero;
  return random;
}

function pintaArray(array) {
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
    resultado += " N" + i + ": " + array[i] + ",";
  }
  return resultado;
}

function InicializarArray() {
  let numero = Number(RecogerNum("Introduce un número de 5 a 10 (incluidos)"));
  let numeros = new Array(numero);
  let media = 0;
  let numerosAlmacenados = 0;

  for (let i = 0; i < numeros.length; i++) {
    numeros[i] = CalcularRandom(numero);
    numerosAlmacenados += numeros[i];
  }

  media = numerosAlmacenados/numeros.length;
  numerosAlmacenados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) numerosAlmacenados += numeros[i] + ", "; 
  }

  console.log(pintaArray(numeros))
  console.log(`Superan la media: ${numerosAlmacenados}`);
}

