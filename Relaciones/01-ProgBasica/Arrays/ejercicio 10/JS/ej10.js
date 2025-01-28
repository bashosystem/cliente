// Lista de nombres de ejemplo
const nombres = [
  "Juan",
  "Ana",
  "Sara",
  "David",
  "Pablo",
  "Luz",
  "Mark",
  "Irene",
  "Nina",
  "Alba",
];

function filtrarAmigos(nombres) {
  let nombresFiltrados = [];
  
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length == 4) {
      nombresFiltrados.push(nombres[i]);
    }
  }
  return nombresFiltrados;
}

//EJERCICIO CON EL SPLIT

function recogeNombres(){
  nombresUsu = prompt("Inserta diferentes nombres separados por ','");

  nombresNuevo = nombresUsu.split(",");

  nombresNuevo = filtrarAmigos(nombresNuevo);

  return nombresNuevo;
}

console.log(recogeNombres());
console.log(filtrarAmigos(nombres));