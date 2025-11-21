window.onload = () => {
    cartasGeneradas = generarParejas();
    renderizarCartas();
    cambioCara();
};

let cartas = ["bartCard", "bartCard2", "bartCard3", "bartCard4", "bartCard5"];
let cartasGeneradas = []; // Aquí estarán las 10 cartas 5 parejas
let primera = null;
let segunda = null;
let contador = 0;
let bloqueo = false;
let parejasEncontradas = 0;

// Genera 5 cartas aleatorias y duplica cada una
function generarParejas() {
    let seleccionadas = [];
    while (seleccionadas.length < 10) {
        let carta = cartas[Math.floor(Math.random() * cartas.length)];
        if (!seleccionadas.includes(carta)) {
            seleccionadas.push(carta, carta); // Añade la pareja
        }
    }

    return seleccionadas.sort((a,b) =>{
        let alea = Math.random() - 0.5;
        return alea>0 ?a-b:b-a;
    }) 
}


// Crea las imágenes
function renderizarCartas() {
    let contenedor = document.getElementById("cont-cartas");
    contenedor.innerHTML = "";

    for (let i = 0; i < cartasGeneradas.length; i++) {
        let img = document.createElement("img");
        img.src = "img/cartabaraja.jpg";
        img.id = "carta" + i; // id con índice
        contenedor.appendChild(img);
    }
}

function cambioCara() {
    let contenedor = document.getElementById("cont-cartas");

    contenedor.addEventListener("click", (e) => {
        if (bloqueo || e.target.tagName != "IMG"){
            return alert("EStas jugando mal");
        } 

        let carta = e.target;
        let indice = parseInt(carta.id.split("carta")[1]);
        console.log(indice);
        // Si ya está volteada lo ignoramos
        if (carta.src.includes(cartasGeneradas[indice])){
            return alert("Esta volteada");
        } 

        carta.src = "img/" + cartasGeneradas[indice] + ".jpg";

        if (contador == 0) {
            primera = { 
                elemento: carta,
                valor: cartasGeneradas[indice] 
            };
            contador = 1;
        } else if (contador == 1 && carta != primera.elemento) {
            segunda = { 
                elemento: carta,
                valor: cartasGeneradas[indice]
             };
            contador = 0;
            bloqueo = true;

            setTimeout(() => {
                if (primera.valor == segunda.valor) {
                    console.log("¡Pareja encontrada!");
                    parejasEncontradas++;
                    if (parejasEncontradas == 5) {
                        alert("Has encontrado todas las parejas!");
                    }
                } else {
                    console.log("No son iguales");
                    primera.elemento.src = "img/cartabaraja.jpg";
                    segunda.elemento.src = "img/cartabaraja.jpg";
                }
                primera = null;
                segunda = null;
                bloqueo = false;
            }, 800);
        }
    });
}
