function recogeNombres(){
  array = prompt("Inserta diferentes nombres separados por ','");
  arraySeparado = array.split(",");
  return arraySeparado;
}

array1 = recogeNombres();
array2 = recogeNombres();

function concatenarArrays(array1, array2){
  concatenado = [];

  let maxLength = (array1.length > array2.length) ? array1.length : array2.length;
    for (i = 0; i < maxLength; i++) {
      if (i < array1.length) concatenado.push(array1[i]);
      if (i < array2.length) concatenado.push(array2[i]);
    }
  return concatenado;
}
console.log(concatenarArrays(array1,array2));