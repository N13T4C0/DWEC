window.onload = function () {
    let secuenciaSimon = [];
    let secuenciaJugador = [];
    let esperandoClick = false;

    // Mostrar la secuencia con parpadeo
    function avnimaSECUENCIA(arrayMov) {
        let rojo = document.getElementById("rojo2");
        let azul = document.getElementById("azul2");
        let amarillo = document.getElementById("amarillo2");
        let verde = document.getElementById("verde2");

        let colores = { rojo, azul, amarillo, verde };

        arrayMov.forEach((mov, i) => {
            setTimeout(() => {
                colores[mov].style.opacity = "1";
                setTimeout(() => {
                    colores[mov].style.opacity = "0.5";
                    if (i == arrayMov.length - 1) {
                        esperandoClick = true;
                        secuenciaJugador = []; // reiniciar jugada para limpiiar lo que se ha pulsado antes
                        document.getElementById("simon").textContent = "Tu turno";
                    }
                }, 500);
            }, i * 1000);
        });
    }

    // Iniciar el juego
    function iniciarSimon() {
        let colores = ["rojo", "azul", "amarillo", "verde"];
        secuenciaSimon = [];
        for (let i = 0; i < 4; i++) {
            let aleatorio = colores[Math.floor(Math.random() * colores.length)];
            secuenciaSimon.push(aleatorio);
        }
        esperandoClick = false;
        document.getElementById("simon").textContent = "Observa la sec";
        avnimaSECUENCIA(secuenciaSimon);
    }

    // Verificar clic del jugador
    function manejarClick(color) {
        if (!esperandoClick){
            alert("Todavia no es tu turno");
        }
        secuenciaJugador.push(color);
        let i = secuenciaJugador.length - 1;

        if (secuenciaJugador[i] !== secuenciaSimon[i]) {
            document.getElementById("simon").textContent = " Fallaste";
            esperandoClick = false;
        } else if (secuenciaJugador.length == secuenciaSimon.length)  { // para saber si ha hecho los 4 clicks
            document.getElementById("simon").textContent = "Bien hecho";
            esperandoClick = false;
        }
    }

    // 
    document.getElementById("rojo2").addEventListener("click", ()=> {
        manejarClick("rojo");
    });

    document.getElementById("azul2").addEventListener("click", ()=> {
        manejarClick("azul");
    });

    document.getElementById("amarillo2").addEventListener("click", ()=> {
        manejarClick("amarillo");
    });

    document.getElementById("verde2").addEventListener("click",()=> {
        manejarClick("verde");
    });

    // Activar botón de inicio
    let boton = document.querySelector("button"); // para el primer buton que haya en el html
    boton.addEventListener("click", iniciarSimon);

};
