let nombres = recogeNombres();

function likes (nombres) {
  let resultado = "";
  
  if (nombres.length == 0 || nombres.includes("")) resultado = "No one likes this";
  else if (nombres.length == 1) resultado = `${nombres[0]} likes this`;
  else if (nombres.length == 2) resultado = `${nombres[0]} and ${nombres[1]} like this`;
  else if (nombres.length == 3) resultado = `${nombres[0]}, ${nombres[1]} and ${nombres[2]} like this`;
  else resultado = `${nombres[0]}, ${nombres[1]} and ${nombres.length - 2} others like this`;

  console.log(resultado);
}

function recogeNombres(){
  array = prompt("Inserta diferentes nombres separados por ','");
  arraySeparado = array.split(",");
  return arraySeparado;
}

likes(nombres);