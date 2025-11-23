// 1
let letrasran = "qweyuplñkdhfnvm";
let numran = Math.floor(Math.random() * (9999 - 1111) +1);
let letrillas1 = Math.floor(Math.random() * (letrasran.length - 1) +1);
let letrillas2 = Math.floor(Math.random() * (letrasran.length - 1) +1);
let letrillas3 = Math.floor(Math.random() * (letrasran.length - 1) +1);

console.log("Tu matricula es:"+letrasran.charAt(letrillas1)+letrasran.charAt(letrillas2)+letrasran.charAt(letrillas3)+"-"+numran);
// 2 el de los dados
let ndados = 3;
let ncara = 6;
let intentos = 0;
let resultado = "";
let suma =0;
while(intentos<ndados){
    drandom = Math.floor(Math.random()*(ncara - 1)+1);
    intentos++;
    resultado +=drandom; 
    suma = drandom+suma;
    console.log(resultado);
}
console.log(ndados+" dados de "+ncara+" --> "+resultado+"--> total: "+suma);
// 3
let alea = "1234567890qtupñlsggmnbx";
let intentos1 = 1;
resul = "";
while(intentos1<=16){
    let miau = Math.floor(Math.random() * (alea.length - 1) +1);
    resul += alea.charAt(miau);
    intentos1++;
}
console.log(resul+"tiene "+resul.length);
// 4
function validarContrasena(contra) {
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = "0123456789";
    let simbolos = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

    let esLarga = contra.length >= 8;
    let tieneMayuscula = false;
    let tieneNumero = false;
    let tieneSimbolo = false;

    for (let i = 0; i < contra.length; i++) {
        let char = contra[i];

        if (mayusculas.includes(char)) {
            tieneMayuscula = true;
        }

        if (numeros.includes(char)) {
            tieneNumero = true;
        }

        if (simbolos.includes(char)) {
            tieneSimbolo = true;
        }
    }
    let mensaje = "";
    if (!esLarga)
         mensaje += "Debe tener al menos 8 caracteres. ";
    if (!tieneMayuscula) 
        mensaje += "Debe incluir una letra mayúscula. ";
    if (!tieneNumero) 
        mensaje += "Debe incluir un número. ";
    if (!tieneSimbolo) 
        mensaje += "Debe incluir un símbolo especial. ";

    if (mensaje == "") {
        console.log( "La contraseña es val");
    } else {
        console.log("La contraseña no es válida: ");
    }
}

// Ejemplo de uso
console.log(validarContrasena("Hola123!")); // válida
console.log(validarContrasena("hola123"));  // sin mayúscula ni el sim

// 5    
let cadenilla = "aaabbcddd";
let conta=0;
let contb =0;
let contc=0;
let contd =0;
let resultado4 ="";
for(let i=0;i<cadenilla.length;i++){
    if(cadenilla.charAt(i)=="a"){
        conta++;
    }else if(cadenilla.charAt(i)=="b"){
        contb++;
    }else if (cadenilla.charAt(i)=="c"){
        contc++;
    }else contd++;

}
console.log("a"+conta+"b"+contb+"c"+contc+"d"+contd);
// 6 cn el repeat

function decode(cad6){
    let caddeco ="";
    for (let o=0;o<cad6.length;o++){
    caddeco += cad6[o].repeat((Number(cad6[o+1])));

    }
    return caddeco;
}

decode("a3b1c3");
// 7
function juegoAdivinar() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intentos = 7;
  let acierto = false;

  while (intentos > 0) {
    let intento = Number(prompt("Tienes " + intentos + " intentos. Ingresa un num entre 1 y 100:"));

    if (isNaN(intento) || intento < 1 || intento > 100) {
      console.log("Debe ser un número válido entre 1 y 100.");
      continue; // No descuenta intento
    }

    if (intento == numeroSecreto) {
      console.log("¡Ganaste! El número era " + numeroSecreto);
      acierto = true;
      break;
    } else if (intento < numeroSecreto) {
      console.log("Muy bajo. Sube.");
    } else {
      console.log("Muy alto. Baja.");
    }

    intentos--;
  }

  if (!acierto) {
    console.log("Se acabaron los intentos. El num era " + numeroSecreto);
  }
}


// 8 genera num usando el Luhn si esta par x2 sino tal cual
let luhnNum = (Math.floor(Math.random()*999999999999999)+111111111111111).toString();
//et resultado = [];
for(let k = luhnNum.length - 1; k >= 0; k--){
    let n = parseInt(luhnNum[k]);
    if (((luhnNum.length - 1 - k) % 2) == 1) { // Posiciones pares desde la derecha
        let doble = n * 2;
        if (doble >= 10) {
            doble = doble - 9; // Suma de cifras
        }
        resultado.push(doble);
    } else {
        resultado.push(n);
    }
}
console.log("Tarjeta es:" + luhnNum);
console.log("Números procesados tipo Luhn: " + resultado.join(""));

// 9
function promedio(numeros){

}
let cadnum = "1 50 190";
let cadnums = cadnum.split(" ");
let sumaa =0;
for (let m=0;m<cadnums.length;m++){
    sumaa = parseInt(cadnums[m])+sumaa;
}
let promedio = Math.floor(sumaa/cadnums.length);
console.log("eL PROMEDIO es :"+promedio);
// la mediana
let mediana =0;
let calculome =0;
for (let m=0;m<cadnums.length;m++){
    mediana = Math.floor(cadnums.length/2);
    if((mediana%2)!=0){
        calculome= cadnums[mediana];
    }else{
        calculome = (parseInt(cadnums[mediana-1])+parseInt(cadnums[mediana]))/2;
    }
}
function desviacion(numeros){

}
console.log("La mediana es:"+calculome);
let palabra = "javascript";
let letra1 = "";
let letra2 = "";

while (letra1 !== "a") {
  letra1 = prompt("Dime la letra faltante: j_v_s_c_r_ipt");
  if (letra1 !== "a") {
    console.log("Incorrecto. Intenta de nuevo.");
  }
}

while (letra2 !== "a") {
  letra2 = prompt("Muy bien, ahora dime la siguiente letra que falta: ja_v_s_cript");
  if (letra2 !== "a") {
    console.log("Incorrecto. Intenta de nuevo.");
  }
}

console.log("Has acertado la palabra: " + palabra);

