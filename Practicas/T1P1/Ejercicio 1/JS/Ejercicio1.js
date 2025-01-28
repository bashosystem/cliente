function RecogerOpcion(msj){
  let a = prompt(msj);
  while(isNaN(a) || a <= 0 || a > 2) a = prompt("ERROR: Introduce 1 o 2");
  return a;
}

function conversionMonedas() {
  let opcion = RecogerOpcion("Dime tu opción (1 para cambio a pesetas, 2 para cambio a dólares)");
  let cantidad = prompt("Introduce cantidad a convertir:");
  while (isNaN(cantidad) || cantidad <= 0) cantidad = prompt("ERROR: Introduce número mayor a 0");
  
  if (opcion == 1) cantidad *= 166;
  else cantidad *= 1.09;

  alert(`Conversión realizada: ${cantidad}`);
}