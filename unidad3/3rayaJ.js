class TresEnRaya {
    tablero;
    jugador1;
    jugador2;
    turnoJugador;

    constructor(nombreJ1, nombreJ2) {
        this.jugador1 = nombreJ1;
        this.jugador2 = nombreJ2;
        this.reiniciaPartida();
    }

    reiniciaPartida() {
        this.tablero = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];
        this.turnoJugador = 1;
    }

    /*
    0  Movimiento válido
    1  Casilla ocupada
    2  No es el turno del jugador
    3  Movimiento ganador
    */
    mueve(fila, columna, valor) {
        let resultado = 0;

        if (this.tablero[fila][columna] !== " ") {
            resultado = 1;
        } else if ((this.turnoJugador == 1 && valor != "X") || (this.turnoJugador == 2 && valor != "O")) {
            resultado = 2;
        } else {
            this.tablero[fila][columna] = valor;

            if (this.ganador(valor)) {
                resultado = 3;
            } else {
                if (this.turnoJugador === 1) {
                    this.turnoJugador = 2;
                } else {
                    this.turnoJugador = 1;
                }
            }
        }

        return resultado;
    }

    ganador(jugador) {
        let devuelve = false;
        let condiciones = [
            [this.tablero[0][0], this.tablero[0][1], this.tablero[0][2]],
            [this.tablero[1][0], this.tablero[1][1], this.tablero[1][2]],
            [this.tablero[2][0], this.tablero[2][1], this.tablero[2][2]],
            [this.tablero[0][0], this.tablero[1][0], this.tablero[2][0]],
            [this.tablero[0][1], this.tablero[1][1], this.tablero[2][1]],
            [this.tablero[0][2], this.tablero[1][2], this.tablero[2][2]],
            [this.tablero[0][0], this.tablero[1][1], this.tablero[2][2]],
            [this.tablero[0][2], this.tablero[1][1], this.tablero[2][0]]
        ];

        let i = 0;
        while (i < condiciones.length) {
            let fila = condiciones[i];
            if (fila[0] === jugador && fila[1] === jugador && fila[2] === jugador) {
                devuelve = true;
                i = condiciones.length;
            } else {
                i = i + 1;
            }
        }

        return devuelve;
    }

    mostrarTablero() {
        let linea = "-------";
        let i = 0;

        while (i < this.tablero.length) {
            console.log(linea);
            let fila = "|";
            let j = 0;

            while (j < this.tablero[i].length) {
                fila = fila + this.tablero[i][j] + "|";
                j = j + 1;
            }

            console.log(fila);
            i = i + 1;
        }

        console.log(linea);
    }
}


// opa usarlo
let juego = new TresEnRaya("Ana", "Luis");
juego.mostrarTablero();
console.log(juego.mueve(0, 0, "X")); // Jugador 1
console.log(juego.mueve(0, 1, "O")); // Jugador 2
console.log(juego.mueve(0, 0, "X"));



juego.mostrarTablero();
