let muñeco = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========
  `,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========
  `,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
  `,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
  `,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========
  `,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========
  `,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
  `
];
let palabras=["HTML","JAVASCRIPT","CSS","PHP","REACT","VUE","JAVA"];
let palabraEscogida;
let palabraLetras=[];
let errores=0;
let remplazo;
window.onload=()=>{
    iniciarJuego();
}
function iniciarJuego(){
    errores=0;
    palabraLetras=[];
    palabraOculta=[];
    muñecoPintar();
    console.log("erores"+errores);
    // cargamaos la palabra aleatoria
    palabraAlea();
    mostrarPalabra();
    comparacion();

}
function muñecoPintar(){
    let figura = document.getElementById("fig");
    figura.innerHTML = "<pre>"+muñeco[errores]+"</pre>";
}
function palabraAlea(){
    let alea = Math.floor(Math.random()*palabras.length);
    palabraEscogida=palabras[alea];
    for (i=0;i<palabraEscogida.length;i++) {
        palabraLetras.push(palabraEscogida[i]);
    }
}
    let palabraOculta =[];
function mostrarPalabra(){
    let palabra = document.getElementById("palabra");
     for (i=0;i<palabraEscogida.length;i++) {
        palabraOculta.push("-")
    }
    palabra.innerHTML = "<p>"+palabraOculta.join(" ")+"</p>"; // para converti el array en string y cn espacios
}
function comparacion(){
    let palabra = document.getElementById("palabra");
    let adivinar = document.getElementById("adivinar");
    adivinar.addEventListener("click",()=>{
        let usuario = document.getElementById("pregunta").value.toUpperCase();
            if (usuario.length == 0) errores+1;
        if(palabraEscogida.includes(usuario[0])){
            console.log("acertado priemra palabra");
            for (let i = 0; i < palabraEscogida.length; i++) {
                if (palabraEscogida[i] == usuario[0]) {
                    palabraOculta[i] = usuario[0];  // oara remplazar el - por la letra
                }
            }
        palabra.innerHTML = "<p>"+palabraOculta.join("")+"</p>";

        }else{
            console.log("No acertado");
            errores++;
            muñecoPintar();
            if(errores==7){
                alert("No has adivinado la palabra era:"+palabraEscogida);
                iniciarJuego();
            }
            console.log(errores)
        }
        if(!palabraOculta.includes("-")){
            alert("Has ganao");
            iniciarJuego();
        }
    })
}