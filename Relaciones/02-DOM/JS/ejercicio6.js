
function crearElems () {
  let botones = new Array(5);
  
  for (let i = 0; i < botones.length; i++) {
    botones[i] = document.createElement("button");
  }
  botones[0].value = "red";
  botones[1].value = "blue";
  botones[2].value = "yellow";
  botones[3].value = "pink";
  botones[4].value = "green";

  for (i = 0; i < botones.length; i++) {
    document.body.appendChild(botones[i])
  }
}
crearElems();

let botones = document.querySelectorAll("button");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    document.body.style.backgroundColor = botones[i].value;
  })
}