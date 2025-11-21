// 1
let javap = "JAVASCRIPT";
console.log ("Tiene: "+javap.length);
// 2
let var1 = "Hola mundo";
console.log("El primero es:"+var1[0]+" y el ultimo es: "+var1[var1.length-1]);
// 3
let frase = "Programar es divertido";
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
// 4
let hola = "hola";
let mundo = "mundo ";
console.log(hola+mundo);
console.log(hola.concat(mundo));
// 5 -- Nivel 2
let mundop = "Hola mundo";
for(let i =0;i<mundop.length;i++){
    if(mundop[i]=="o"){
        console.log("Se encuebtra en la pos:"+i);
    }
}
// indexOf("0") al principio lastIndexOf("0")
// 6
let cad = "JavaScript es genial";
console.log(cad.substring(0,10));
console.log(cad.slice(10));

// 7
let fras = "El perro corre rapido";
let nuevaFrase = fras.replace("perro", "gato");
console.log(nuevaFrase);
// 8
let end = "Frontend Developer";
if(end.includes("end")&& end.startsWith("Front") && end.endsWith("per")){
    console.log("Si lo incluye");
} 
// 9 nivel 3
let frasei = "rojo,verde,azul,amarillo";
let array = frasei.split(",");
console.log(array);
// 10
let repeat = "hola ";
console.log(repeat.repeat(5));
// 11
let espacios = " hola mundo ";
console.log(espacios.trim());
// 12
let siete = "7";
console.log(siete.padStart(3,0));
// 13 nive 4
function vocal(cadena) {
  let contador = 0;
  let vocales = "aeiouAEIOU";

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      contador++;
    }
  }

  return contador;
}

let texto = "Hola mundo";
console.log("Cantidad de vocales:", vocal(texto));
// 14
function pal(frase){
    let invertida = "";
    for(let i=frase.length-1;i>=0;i--){
        invertida += frase[i];
    }
    if (invertida.toLowerCase()==frase.toLowerCase()){
        console.log("es un palidomo");
    } else console.log("No lo es");
}
pal("Radar");
pal("Hola");
// 15 
let texto1 = "JavaScript";
let invertido1 = "";

for (let i = texto1.length - 1; i >= 0; i--) {
  invertido1 += texto1[i];
}

console.log(invertido1);
// 16
let capp = "hola mundo desde javascript";

function capi(frase){
    let arra = frase.split(" ");
    let resultado = "";

    for(let i = 0; i < arra.length; i++){
        let palabra = arra[i];
        let capitalizada = palabra.charAt(0).toUpperCase() + palabra.substring(1);
        resultado += capitalizada + " "; // se puede hacer cn el join
    }
    console.log(resultado);
}

capi(capp); 


// 17
let tarjetazo = "1234567812345678";
let oculto = "*".repeat(tarjetazo.length - 4);
let visible = tarjetazo.substring(tarjetazo.length - 4);
console.log(oculto + visible);
// 18
let pla = "El lenguaje JavaScript es muy poderoso";
let palabras = pla.split(" ");
console.log(palabras.length);
