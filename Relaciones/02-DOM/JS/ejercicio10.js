function crearElems() {
  let divs = new Array(3);

  for (let i = 0; i < divs.length; i++) {
    divs[i] = document.createElement("div");
    divs[i].style.width = "100px";
    divs[i].style.height = "100px";
  }
  divs[0].style.backgroundColor = "red";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "violet";

  for (let i = 0; i < divs.length; i++) {
    document.body.appendChild(divs[i]);
  }
}
crearElems();

let divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = divs[i].style.backgroundColor;
  })
  divs[i].addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "";
  })
}