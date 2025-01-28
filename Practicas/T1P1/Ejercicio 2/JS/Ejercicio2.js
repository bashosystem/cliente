let cnt = 0;
let n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0, n7 = 0, n8 = 0, n9 = 0, n10 = 0;
let total = 0;
let input;
let media = 0;
let mayores = "";
let doble = "";
let continuar = true;

//Usamos un bucle para solicitar los 10 números o hasta que se introduzca un "."
while (continuar) {
  input = pideDato(cnt+1);
  switch (true) {
    case (input == "."):
      // Interrumpir la solicitud si se introduce un punto "."
      continuar = false; //Rompe el bucle
      break;
    case (cnt == 0):
      n1 = Number(input);
      total += n1;
      cnt++;
      break;
      case (cnt == 1):
        n2 = Number(input);
        total += n2;
        cnt++;
        break;
    case (cnt == 2):
        n3 = Number(input);
        total += n3;
        cnt++;
        break;
    case (cnt == 3):
        n4 = Number(input);
        total += n4;
        cnt++;
        break;
    case (cnt == 4):
        n5 = Number(input);
        total += n5;
        cnt++;
        break;
    case (cnt == 5):
        n6 = Number(input);
        total += n6;
        cnt++;
        break;
    case (cnt == 6):
        n7 = Number(input);
        total += n7;
        cnt++;
        break;
    case (cnt == 7):
        n8 = Number(input);
        total += n8;
        cnt++;
        break;
    case (cnt == 8):
        n9 = Number(input);
        total += n9;
        cnt++;
        break;
    case (cnt == 9):
        n10 = Number(input);
        total += n10;              
        cnt++;
        continuar = false; // Rompe el bucle
        break;
  }
}
if (cnt > 0) {
  media = total / cnt;
  imprime(media, n1);
  imprime(media, n2);
  imprime(media, n3);
  imprime(media, n4);
  imprime(media, n5);
  imprime(media, n6);
  imprime(media, n7);
  imprime(media, n8);
  imprime(media, n9);
  imprime(media, n10);
}

function imprime(media, n) {
  if (n > 0) {
    if (esMayor(media, n)) {
      if (esMayor2(media, n)) {
        doble += n + ", ";
        mayores += n + ", ";
      } else {
        mayores += n + ", ";
      }
    }
  }
  alert("La media es: " + media + " --- Numeros mayores que la media: " + mayores + "--- Doble que la media: " + doble);
}

function esMayor2(media, numero) {
  if (numero > media * 2) {
      return true;
  }
}
function esMayor(media, numero) {
  if (numero > media) {
      return true;
  }
}

function pideDato(cnt) {
  let incorrecto = true;
  let n;
  do {
    n = prompt("Introduzca numero " + cnt + " (o bien . para finalizar)");
    console.log(n);
    if (n !== ".") {
      if (isNaN(n)) {
        alert("Error en los datos, introduzca otro");
      } else incorrecto = false;
    } else incorrecto = false;
  } while (incorrecto);
  return n;
}