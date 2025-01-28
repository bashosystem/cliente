function crearElems() {
  let divs = new Array(3);

  for (let i = 0; i < divs.length; i++) {
    divs[i] = document.createElement("div");
    divs[i].style.width = "300px";
    divs[i].style.height = "100px";
    divs[i].innerHTML = `Soy el div${i+1}`;
  }
  divs[0].style.backgroundColor = "red";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "violet";

  divs[1].style.visibility = "hidden";
  divs[1].style.display = "none";

  for (let i = 0; i < divs.length; i++) {
    document.body.appendChild(divs[i]);
  }
}
crearElems();

let divs = document.querySelectorAll("div");

divs[0].addEventListener("mouseenter", () => {
  divs[1].style.visibility = "visible";
  divs[1].style.display = "";
})
divs[0].addEventListener("mouseleave", () => {
  divs[1].style.visibility = "hidden";
  divs[1].style.display = "none";
})