// alert("Hola mundo. Fichero JS");

nombre ="Manuel";
console.log(nombre);

var nombre;
let a = 2;
let b = '3';
let c = a + b;
console.log(c);
console.log(typeof a);
console.log(typeof b);
let ok = true;
console.log(typeof ok);
console.log(a + nombre);
nombre='Jose Miguel';
console.log(a+nombre);
console.log(typeof nombre);

if(b>a){
  console.log("");
} else{
  console.log("");
}

let objeto1 = Symbol(1);
console.log(typeof objeto1);
console.log(objeto1);

let objeto2 = Symbol(1);
console.log(typeof objeto2);
console.log(objeto2);

let horaDia = 23;
let mensaje = "";

if (horaDia >= 6 && horaDia < 12) mensaje = "Buenos dias"
else if (horaDia >= 12 && horaDia <= 18) mensaje = "Buenas tardes"
else if ((horaDia >= 18 && horaDia < 24) || (horaDia >= 0 && horaDia < 6)) mensaje = "Buenas noches"
else console.log("ERROR")

console.log(mensaje + horaDia + ":00");

let z = 2;
let y = '2';

if (z == y) console.log("Son iguales");
if (z === y) console.log("Son idénticos")
else console.log("NO SON IGUALES");

//Operador Ternario
// El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
// Se usa para tomar una decisión basada en una
// expresión que se evalúa como true o false
// Es una forma abreviada de la sentencia if else que crea código más limpio, fácil de entender 
// y rápido de escribir.

let resultado = (z===y) ? 1 : 2;
console.log(resultado);


//Casteo
let miNumero = "18.18";
console.log(miNumero);

if (isNaN(miNumero)){
  console.log("No es un numero");
}
miNumero = Number(miNumero);
console.log(miNumero);

let miString = String(miNumero);
console.log(miString);

//Bucles
let contador=0;
while (contador < 3){
  console.log(contador);
  contador++;
}

let cont=0;
do {
  console.log(cont++);
} while (cont<4);

for (let conta=0; conta<5; conta++){
  console.log(conta);
}

let mes=11;
let estacion = "desconocida";

switch (mes)
{
  case 1: case 2: case 12:
    estacion="Invierno";
    break;
  case 3: case 4: case 5:
    estacion="Primavera";
    break;
  case 6: case 7: case 8:
    estacion="Verano";
    break;
  case 9: case 10: case 11:
    estacion="Otoño";
    break;
}
console.log(estacion);

for (let i=0; i<=5; i++){
  for (let j=0; j<=6; j++){
    console.log(`c1: ${i} c2: ${j}`);
    continue;
    if (j==2){
       //break;
        j=4;
        i=3;
    }
  }
}

//Mapas (Profe dice objetos)
const objeto3={ nombre: "José Miguel",apellido:"Cabezuelo", edad: 47}
console.log(typeof objeto3);

let marcaCoches = ['BMW','Audi','Renault','Ford'];
console.log(typeof marcaCoches);

console.log(marcaCoches);

for (let i=0; i<marcaCoches.length; i++){
  console.log(marcaCoches[i]);
}

//Definir Clase
class Persona{
  constructor(nombre,apellido,edad){
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  pasoaTexto(){
    return `${this._nombre}
    ${this._apellido},
    edad: ${this._edad}`;
  }
}
console.log(Persona);
console.log(typeof Persona);

//Probar la clase Persona
let persona1 = new Persona('Juan','Pérez', 23);
console.log(persona1);
let nombre2 = persona1.pasoaTexto();
console.log(nombre2);

let persona2 = new Persona(objeto3.nombre,objeto3.apellido,objeto3.edad)
console.log(persona2.pasoaTexto());

//Funciones

var aa = 4;
var bb = 5;

function miFuncion(xx, yy){
  let aa = 7;
  let bb = 10;
  console.log("Suma: "+ (xx + yy));
  console.log("Suma: "+ (aa + bb));
  console.log(`Suma: ${aa + bb}.Más texto`);
  return (xx + yy);
}

let result = miFuncion(7,8);
console.log(result);

console.log(typeof miFuncion);



//Vamos a realizar una Calculadora.
//Solicitamos número A, número B y operación (+.-. * y /)

function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a)){
    a = prompt("Error: introduce un número (a): ")
  }
  return a;
}


function Sumar(num1,num2){  
  alert(`La suma es: ${Number(num1)+Number(num2)}`);
}
function Restar(num1,num2){  
  alert(`La resta es: ${Number(num1)-Number(num2)}`);
}
function Multiplicar(num1,num2){  
  alert(`La multiplicación es: ${Number(num1)*Number(num2)}`);
}
function Dividir(num1,num2){  
  alert(`La división es: ${Number(num1)/Number(num2)}`);
}

function Calculadora(){
  let a = RecogerNum("Dime numero A: ");
  let b = RecogerNum("Dime numero B: ");
  
  
  let opcion = prompt("Pulsa (1: Sumar / 2: Restar / 3: Multiplicar / 4: Dividir");
  switch (opcion)
  {
    case "1":
      Sumar(a,b);
      break;
    case "2":
      Restar(a,b);
      break;
    case "3":
      Multiplicar(a,b);
      break;
    case "4":
      Dividir(a,b);
      break;
    default:
      break;
  }
}
Calculadora();

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