function recogerNum(mensaje){
  let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
 
  while(isNaN(a) || a < 0 || a > 10){
      alert(`Has introducido valores no aceptados`);
      a = prompt(mensaje);
  }
  return (a);
}

let boton = document.getElementById("lanzar");

boton.addEventListener("click", function(){
  let filas = recogerNum("Dime el numero de filas que va a tener la tabla:");
  let columnas = recogerNum("Dime el numero de columnas que va a tener la tabla:");

  let tabla = document.getElementById("tabla");
  tabla.classList.add("tabla");

  let nuevaTabla = document.createElement('table');
  let tablaBody = document.createElement('tbody');

  for (let i = 0; i < filas; i++) {
      let fila = document.createElement("tr");

      for (let j = 0; j < columnas; j++) {
          let columna = document.createElement("td");
          columna.textContent = (i + 1);
          fila.appendChild(columna);
      }
      tablaBody.appendChild(fila);
  }
  nuevaTabla.appendChild(tablaBody);
  tabla.appendChild(nuevaTabla);
});