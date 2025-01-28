console.log("cargado");
let listadoPrincipal = document.querySelectorAll("li");

let pulsado0 = false;
let pulsado1 = false;
let pulsado2 = false;

//opción 1
// listadoPrincipal[0].onclick = activarSubmenu0;

// opción 2
listadoPrincipal[0].addEventListener("click", activarSubmenu0);

function activarSubmenu0() {
    if (!pulsado0) {
        pulsado0 = true;

        if (pulsado1) {
            listadoPrincipal[1].lastChild.remove();
            pulsado1 = false;
        }
        if (pulsado2) {
            listadoPrincipal[2].lastChild.remove();
            pulsado2 = false;
        }

        let datosInicio = ["Portada", "Acerca de mi", "Mis fotos"];
        let listaInicio = document.createElement("ul");
        for (let i = 0; i < datosInicio.length; i++) {
            let item = document.createElement("li");
            item.innerHTML = datosInicio[i];
            listaInicio.appendChild(item);
        }
        listadoPrincipal[0].appendChild(listaInicio);
    }
    else {
        listadoPrincipal[0].lastChild.remove();
        pulsado0 = false;
    }
};

// listadoPrincipal[1].onclick = activarSubmenu1;
// opción 2
listadoPrincipal[1].addEventListener("click", activarSubmenu1);

function activarSubmenu1() {
    if (!pulsado1) {
        if (pulsado0) {
            listadoPrincipal[0].lastChild.remove();
            pulsado0 = false;
        } else if (pulsado2) {
            listadoPrincipal[2].lastChild.remove();
            pulsado2 = false;
        }
        let datosProyectos = ["Web Apps", "Mobile Apps", "Juegos"];
        let listaProyectos = document.createElement("ul");
        for (let i = 0; i < datosProyectos.length; i++) {
            let item = document.createElement("li");
            item.innerHTML = datosProyectos[i];
            listaProyectos.appendChild(item);
        }
        listadoPrincipal[1].appendChild(listaProyectos);
        pulsado1 = true;
    } else {
        listadoPrincipal[1].lastChild.remove();
        pulsado1 = false;
    }
};

// listadoPrincipal[2].onclick = activarSubmenu2;

// opción 2
listadoPrincipal[2].addEventListener("click", activarSubmenu2);

function activarSubmenu2() {
    if (!pulsado2) {
        if (pulsado0) {
            listadoPrincipal[0].lastChild.remove();
            pulsado0 = false;
        } else if (pulsado1) {
            listadoPrincipal[1].lastChild.remove();
            pulsado1 = false;
        }
        let datosPortafolio = ["Paginas Webs", "Software"];
        let listaPortafolio = document.createElement("ul");
        for (let i = 0; i < datosPortafolio.length; i++) {
            let lista = document.createElement("li");
            lista.innerHTML = datosPortafolio[i];
            listaPortafolio.appendChild(lista);
        }
        listadoPrincipal[2].appendChild(listaPortafolio);
        pulsado2 = true;
    } else {
        listadoPrincipal[2].lastChild.remove();
        pulsado2 = false;
    }
};