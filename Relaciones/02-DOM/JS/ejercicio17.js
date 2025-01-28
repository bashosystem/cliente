let btnCorrer = document.getElementById("correr");
btnCorrer.addEventListener("click", iniciarCarreraOptima);

function calcularVelocidades() {
  let velocidades = [];
  for (let i = 0; i < 4; i++) {
    velocidades.push(parseInt(Math.random()*5 + 1));
  }
  return velocidades;
}

function iniciarCarrera() {
  let corredores = document.querySelectorAll("div");
  let timer;
  // let div1 = corredores[0];
  // let div2 = corredores[1];
  // let div3 = corredores[2];
  // let div4 = corredores[3];

  let velocidades = calcularVelocidades();
  let final = false;

  let estilo1 = window.getComputedStyle(corredores[0]);
  let estilo2 = window.getComputedStyle(corredores[1]);
  let estilo3 = window.getComputedStyle(corredores[2]);
  let estilo4 = window.getComputedStyle(corredores[3]);
  
  // Para asignar un intervalo de tiempo para que la funcion se ejecute cada cierto tiempo
  timer = setInterval(function(){
    let velocidad1 = parseInt(estilo1.getPropertyValue("left")) + velocidades[0];
    let velocidad2 = parseInt(estilo2.getPropertyValue("left")) + velocidades[1];
    let velocidad3 = parseInt(estilo3.getPropertyValue("left")) + velocidades[2];
    let velocidad4 = parseInt(estilo4.getPropertyValue("left")) + velocidades[3];
    
    if (!final) {
      corredores[0].style.setProperty("left", velocidad1 + "px");
      corredores[1].style.setProperty("left", velocidad2 + "px");
      corredores[2].style.setProperty("left", velocidad3 + "px");
      corredores[3].style.setProperty("left", velocidad4 + "px");

      //Opcion 2 (más rápida) (sin adaptar a la anterior)
      // corredores[0].style.left = corredores[0].style.left + velocidades[0] + "px";
      // corredores[1].style.left = corredores[1].style.left + velocidades[1] + "px";
      // corredores[2].style.left = corredores[2].style.left + velocidades[2] + "px";
      // corredores[3].style.left = corredores[3].style.left + velocidades[3] + "px";

      if (parseInt(corredores[0].style.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado div 1");
      }
      if (parseInt(corredores[1].style.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado div 2");
      }
      if (parseInt(corredores[2].style.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado div 3");
      }
      if (parseInt(corredores[3].style.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado div 4");
      }
    }
    else {
      // Para parar el timer;
      clearInterval(timer);
    }
  }, 50); 
}
function iniciarCarreraOptima(){
  // console.log("Estoy aquí");
  let corredores = document.querySelectorAll("div");
  corredores[0].style.left = "0px";
  corredores[1].style.left = "0px";
  corredores[2].style.left = "0px";
  corredores[3].style.left = "0px";

  let velocidades = [];
  let timer;

  let final = false;

  timer = setInterval(function(){
      // Opción 2 velocidad variable en cada momento
      velocidades = calcularVelocidades();
      if (!final){
          for (let i = 0; i < 4; i++){
              corredores[i].style.left = parseInt(corredores[i].style.left) + velocidades[i] + "px";

              if (parseInt(corredores[i].style.left)>=1080){
                  final=true;
                  alert("Ha ganado el corredor: " + (i+1));
              }
          }
      }
      else{
          clearInterval(timer);
      }
  }, 100);
}