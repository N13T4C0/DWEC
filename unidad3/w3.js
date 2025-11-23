// busqueda del resoro 3
let tesoro = [[34, 21, 32, 41, 25],[14, 42, 43, 14, 31],[54, 45, 52, 42, 23],[33, 15, 51, 31, 35],[21, 52, 33, 13, 23]];
console.log(
  "+-------------------------+\n" +
  "¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦\n" +
  "+----+----+----+----+-----¦\n" +
  "¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦\n" +
  "+----+----+----+----+-----¦\n" +
  "¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦\n" +
  "+----+----+----+----+-----¦\n" +
  "¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦\n" +
  "+----+----+----+----+-----¦\n" +
  "¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦\n" +
  "+-------------------------+"
);
let encontrar = tesoro => {
  let primer = tesoro[0][0];
  let encontrao = true;
  console.log("El primer nm es: " + primer);
  while (encontrao) {
    let num1 = parseInt(primer.toString().charAt(0));
    let num2 = parseInt(primer.toString().charAt(1));
    let valorActual = tesoro[num1 - 1][num2 - 1];



    if (valorActual == primer) {
      console.log("has encontrao el tesoro q esta: " + num1 + "," + num2 + " y es:  " + valorActual );
      encontrao = false;
    } else {
      primer = valorActual;
      console.log("casi la celda "+num1+","+num2+" es "+valorActual);
    }
  }
};

encontrar(tesoro);
// 4 alea
let crearTesoro = (dimensiones1, dimensiones2) => {
  if (dimensiones1 < 5 || dimensiones2 < 5) {
    return "al meno de 5x5 pisha";
  }
  let array = [];

  // xcrear matriz vacia
  for (let i = 0; i < dimensiones1; i++) {
    array[i] = [];
    for (let j = 0; j < dimensiones2; j++) {
      array[i][j] = 0;
    }
  }

  // Generar ruta del tesoro
  let ruta = [];
  let fila = 1;
  let columna = 1;
  let encontrado = false;

  while (!encontrado) {
    ruta.push([fila, columna]);

    let nuevaFila = Math.floor(Math.random() * dimensiones1) + 1;
    let nuevaColumna = Math.floor(Math.random() * dimensiones2) + 1;

    if (nuevaFila == fila && nuevaColumna == columna) {
      encontrado = true;
    } else {
      fila = nuevaFila;
      columna = nuevaColumna;
    }
  }


  //  Rellenar cn nm alea
  for (let i = 0; i < dimensiones1; i++) {
    for (let j = 0; j < dimensiones2; j++) {
      if (array[i][j] == 0) {
        let aleaa1 = Math.floor(Math.random() * dimensiones1) + 1;
        let aleaa2 = Math.floor(Math.random() * dimensiones2) + 1;
        array[i][j] = parseInt(aleaa1.toString() + aleaa2.toString());
      }
    }
  }

  return array;
};
function imprimirMapaBonito(matriz) {
  let filas = matriz.length;
  let columnas = matriz[0].length;

  let bordeSuperior = "+";
  for (let i = 0; i < columnas; i++) {
    bordeSuperior += "----+";
  }
  console.log(bordeSuperior);

  for (let i = 0; i < filas; i++) {
    let filaTexto = "|";
    for (let j = 0; j < columnas; j++) {
      let valor = matriz[i][j]; 
      filaTexto += " " + valor + " |";
    }
    console.log(filaTexto);

    // Borde entre filas
    let bordeIntermedio = "+";
    for (let j = 0; j < columnas; j++) {
      bordeIntermedio += "----+";
    }
    console.log(bordeIntermedio);
  }
}

// function buscarTesoro(mapa) {
//   let pista = mapa[0][0];
//   console.log("Empieza en 1,1 " + pista);
//   let encontrao2 = true;
//   // while (encontrao2) {
 
//   //}
// }
let mapa = crearTesoro(6, 6);
imprimirMapaBonito(mapa);

// pr 
