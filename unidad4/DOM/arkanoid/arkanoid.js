let miBola;
let posicionY = 0;
let posicionX = 0;
let velocidadY = 3; 
let velocidadX = 3;
let posicionXBarra = 0;
let velocidadXBarra = 8;
let limiteAncho;
let limiteAlto;
let vidas = 3;
let anchoBola = 20;
let altoBola = 20;
let anchoBarra = 120;
let altoBarra = 12;

let limpiarIntervalo = null;
// para saber si ha ganado o no
let ganado=[];

let juegoIniciado = false;

// Variables para los ladrillos 
let brickRowCount = 3;
let brickColumnCount = 22;
let brickWidth = 32;
let brickHeight = 16;
let brickPadding = 0;
let brickOffsetTop = 0;
let brickOffsetLeft = 0;
let bricks = [];

window.onload = () => {
    let ini = document.getElementById("iniciar");
    let rest = document.getElementById("reset");
    ini.addEventListener("click", () => {
        if (!juegoIniciado) {
            iniciarJuego();
            juegoIniciado = true;
        }
    });
    rest.addEventListener("click", () => {
        reinicioJuego();
    });
};

function iniciarJuego() {
    let miBarra = document.getElementById("barra");
    let contenedor = document.getElementById("pantalla");
    limiteAncho = contenedor.getBoundingClientRect().width;
    limiteAlto = contenedor.getBoundingClientRect().height;

    // Posicionar la barra al fondo
    miBarra.style.top = (limiteAlto - altoBarra) + "px";
    miBarra.style.left = posicionXBarra + "px";

    miBola = document.getElementById("bola");
    posicionX = 200;
    posicionY = 200;
    console.log(posicionY); 
    miBola.style.top = posicionY + "px";
    miBola.style.left = posicionX + "px";
    
    if (limpiarIntervalo != null) {
        clearInterval(limpiarIntervalo);
    }
    console.log("second time"+limpiarIntervalo);
    ladrillos();
    animaBola();

    document.addEventListener("keydown", (e) => {
        if (e.key == "ArrowRight" && posicionXBarra < limiteAncho - anchoBarra) {
            posicionXBarra += velocidadXBarra;
            miBarra.style.left = posicionXBarra + "px";
        } else if (e.key == "ArrowLeft" && posicionXBarra > 0) {
            posicionXBarra -= velocidadXBarra;
            miBarra.style.left = posicionXBarra + "px";
        }
    });
}
function animaBola() {
    limpiarIntervalo = setInterval(() => {
        posicionY += velocidadY;
        posicionX += velocidadX;

        miBola.style.top = posicionY + "px";
        miBola.style.left = posicionX + "px";

        // Rebote en el techo
        if (posicionY <= 0) {
            velocidadY *= -1;
        }

        // Rebote en los lados
        if (posicionX <= 0 || posicionX + anchoBola >= limiteAncho) {
            velocidadX *= -1;
        }

        // Rebote con la barra (CORREGIDO??idk)
        if (posicionY + altoBola >= limiteAlto - altoBarra &&
            posicionY <= limiteAlto - altoBarra + velocidadY + 10 &&
            posicionX + anchoBola > posicionXBarra &&
            posicionX < posicionXBarra + anchoBarra
        ) {
            velocidadY *= -1;
            posicionY = limiteAlto - altoBarra - altoBola;
        }

        for (let i = 0; i < bricks.length; i++) {
            let b = bricks[i];
            if (b.status == 1) {
                if (posicionX < b.x + b.width &&
                    posicionX + anchoBola > b.x &&
                    posicionY < b.y + b.height &&
                    posicionY + altoBola > b.y) {
                    // Destruir ladrillo
                    b.status = 0;
                    let ladrilloDOM = document.querySelectorAll(".ladrillo")[i];
                    ladrilloDOM.style.display = "none"; // Ocultar el ladri
                        console.log("Has tocao el cuadrado");
                        ganado.push(ladrilloDOM);
                        console.log(ganado);
                        if(ganado.length==(brickColumnCount*brickRowCount)){
                            console.log("Has ganado");
                            alert("Has ganado");
                            reinicioJuego();
                        }
                    // Cambiar dirección de la bola
                    velocidadY *= -1;
                    // if(b.status==0)break; en pruebas colision()
                }
            }
        }

        // Si la bola cae
        if (posicionY + altoBola >= limiteAlto) {
            let vidasc = document.createElement("p");
            vidas--;
            vidasc.textContent = "Perdiste 1 vida. Te quedan: " + vidas;
            vidasc.style.color = "red";
            document.body.appendChild(vidasc);

            // Resetear pos de la bola
            reset();

            // cada 2 seg se borra las vidas
            setTimeout(() => {
                document.body.removeChild(vidasc);
            }, 2000);

            if (vidas == 0) {
                alert("Se acabaron las vidas");
                vidas = 3;
                reinicioJuego();
            }
        }
    }, 30);
}

function reset() {
    posicionY = 200;
    posicionX = 200;
    velocidadY = 3;
    velocidadX = 3;
    miBola.style.top = posicionY + "px";
    miBola.style.left = posicionX + "px";
}
function reinicioJuego(){
    console.log(limpiarIntervalo);

    console.log(velocidadXBarra);
    iniciarJuego(); 
}
// Ladrillos (en pruebas)
function ladrillos() {
    let contenedor = document.getElementById("pantalla");
    bricks=[];
    for (let j = 0; j < brickRowCount; j++) {
        for (let i = 0; i < brickColumnCount; i++) {
            let brickX = i * (brickWidth + brickPadding) + brickOffsetLeft;
            let brickY = j * (brickHeight + brickPadding) + brickOffsetTop;

            let ladrillo = document.createElement("div");
            ladrillo.className = "ladrillo";
            ladrillo.style.width = brickWidth + "px";
            ladrillo.style.height = brickHeight + "px";
            ladrillo.style.left = brickX + "px";
            ladrillo.style.top = brickY + "px";
                ladrillo.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";                  
            contenedor.appendChild(ladrillo);

            // guardamos el ladrillo en un array 
            bricks.push({
                x: brickX,
                 y: brickY,
                width: brickWidth,
                height: brickHeight,
                status: 1 // 1 = visible 0 = destr
            });
        }
    }
}
function perder(){
    let ruta = "./img/lose.gif";
    let fondo = document.getElementById("perdido");
    fondo.innerHTML= "<img src"+ruta+" />";
    fondo.style.wid
}