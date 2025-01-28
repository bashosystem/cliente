function recogeNombres(){
  array = prompt("Inserta diferentes nombres separados por ','");
  arraySeparado = array.split(",");
  return arraySeparado;
}

array1 = recogeNombres();
array2 = recogeNombres();

//Mi función (falta comprobar en el mismo array)
function quitarIguales(array1, array2) {
  let arrayCorregido = [];

  for (let i = 0; i < array1.length; i++) {
    let encontrado = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) encontrado = true;
    }
    if (!encontrado) arrayCorregido.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    let encontrado = false;
    for (let j = 0; j < array1.length; j++) {
      if (array2[i] == array1[j]) encontrado = true;
    }
    if (!encontrado) arrayCorregido.push(array2[i]);
  }
  return arrayCorregido;
}

//Función del profe
function copiaUnicos(array1, array2) {
  let arrayFinal = [];

  //Agregar elementos únicos de array1 que no estén repetidos en array1 ni esten en array2
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i]) && esUnico(array1, array1[i])) {
      arrayFinal.push(array1[i]);
    }
    // if (array2.indexOf(array1[i]) === -1 && esUnico(array1, array1[i])) {
    //   arrayFinal.push(array1[i]);
    // }
  }
  //Agregar elementos únicos de array2 que no estén repetidos en array2 ni esten en array1
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i]) && esUnico(array2, array2[i])) {
      arrayFinal.push(array2[i]);
    }
    // if (array1.indexOf(array2[i]) === -1 && esUnico(array2, array2[i])) {
    //   arrayFinal.push(array2[i]);
    // }
  }
  return arrayFinal;
}

//Igual que repetidos pero más simple
function esUnico(array, elem) {
  return array.indexOf(elem) === array.lastIndexOf(elem);
}

function repetidos(array, elem) {
  let cont = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) cont++;
  }

  // if (cont == 1) return false;
  // return true;

  //Mi simplificación del return
  return cont != 1;
}

console.log(copiaUnicos(array1, array2));
// console.log(quitarIguales(array1, array2));