// 3x3 juego en raya
let tablero = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];
 // tmb se puede tablero[3][3]= 0 asi t lo genera

function mostrarTablero() {
  let linea = "-------";
  for (let i = 0; i < tablero.length; i++) {
    console.log(linea);
    let fila = "|";
    for (let j = 0; j < tablero[i].length; j++) {
      fila = fila + tablero[i][j] + "|";
    }
    console.log(fila);
  }
  console.log(linea);
}

let mov = (fila,columna,jugador)=> {
    if(tablero[fila][columna]==" "){
        tablero[fila][columna]=jugador;
        
    }else return "Esta ocupa"; 
}

function hayGanador(jugador) {
  let resultado = false;
  let condiciones = [
    // Filas
    [tablero[0][0], tablero[0][1], tablero[0][2]],
      [tablero[1][0], tablero[1][1], tablero[1][2]],
    [tablero[2][0], tablero[2][1], tablero[2][2]],
    // Colum
    [tablero[0][0], tablero[1][0], tablero[2][0]],
    [tablero[0][1], tablero[1][1], tablero[2][1]],
    [tablero[0][2], tablero[1][2], tablero[2][2]],
    // Diagonales
    [tablero[0][0], tablero[1][1], tablero[2][2]],
    [tablero[0][2], tablero[1][1], tablero[2][0]]
  ];

  for (let i = 0; i < condiciones.length; i++) {
    let fila = condiciones[i];
    if (fila[0] == jugador && fila[1] == jugador && fila[2] == jugador) {
      resultado= true;
    }
  }

  return resultado;
}


mov(0, 0, "X");
mov(1, 1, "O");
mov(0, 1, "X");
mov(2, 2, "O");
mov(0, 2, "X");

mostrarTablero();

if (hayGanador("X")) {
  console.log("X ha ganao");
} else if (hayGanador("O")) {
  console.log("O ha ganado");
} else {
  console.log("sigan juganfdo");
}
