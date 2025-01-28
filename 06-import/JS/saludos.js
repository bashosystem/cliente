// Incluimos y definimos las funciones a exportar
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
function despedida(nombre) {
  return `Hasta luego, ${nombre}`;
}

//Exportar una función aislada
export function despedidas(nombre) {
  return `Hasta luego, ${nombre}`;
}

// Exporto las funciones
export{saludar, despedida};
