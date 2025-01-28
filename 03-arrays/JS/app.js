let autos=['BMW', 'Audi', 'Volvo',];

console.log(autos);
console.log(typeof autos);

let item = new Array(1,6); /* Crea 2 cajones con 1 y 6 */
console.log(item); 
let items = new Array(6); /* Crea 6 cajones */
console.log(items);

// let pets = new Array('perro', 'gato', 'periquito');
let pets = ['perro','gato','periquito'];
console.log(pets);
console.log(pets.length);
console.log(pets[0]);

//Iterar en el Array
let len = pets.length;
for (let i = 0; i < len; i++){
  console.log(pets[i]);
}

pets.push('rana','toro');
// console.log(pets[i]);
pets.push('loro');
pets[2] = 'leon';
pets[8] = 'zebra';
console.log(pets);

items[2] = 'toro';
console.log(items);

console.log(pets.pop()); /* Muestra el ultimo elemento y lo elimina */
console.log(pets);
console.log(pets.shift()); /* Muestra el primer elemento y lo elimina */
console.log(pets);
pets.unshift('Perro'); //Añade un espacio al principio con 'Perro'
console.log(pets);

function log(msj){
  console.log(msj);
}
/* splice param 2: número de elementos a borrar (0 = ninguno, solo inserta) */
const months = ['Jan','March','April','June'];
months.splice(1,0,'Feb'); // 0 Inserta en la posición 1
console.log(months);
months.splice(1,1,'May'); // 1 Reemplaza en la posición 1
console.log(months);

months.splice(2,0,'July','Agost','Sept'); // 2 Reemplaza en la posición 1, 2 cajones
console.log(months);

let eliminados = months.splice(3); //en Months se quedan los 3 primeros elementos

console.log(eliminados)
console.log(months);

// Ordenación de arrays
console.log(months.reverse()); //Ordena al revés
console.log(months.sort()); //Ordena alfanuméricamente

//Partes de una palabra, frase, vectores, ... delimitados por un separador
let cadena = 'Javascript es un lenguaje de programación. Javascript';
let vector = '12,34,45,6,7,9';

cadena = cadena.replace('Java','ECMA');
console.log(cadena.replace('Java', 'ECMA')); //Reemplaza la primera ocurrencia

let palabras = cadena.split(' ');
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);

//Búsqueda de una posición
let posicion = months.indexOf('Jan');
console.log(posicion);

months.push('Apr');
months.push('Jun');
//Slice (te devuelve array desde la posición indicada)
console.log(months.slice(2));
console.log(months);