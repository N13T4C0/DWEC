// 1
let numero = 10;
if (numero > 5) {
  numero == 20;
}
console.log(numero);
/* 
Esta haciendo uso del comparador y no la asignacion
*/
// 2
let ciudad = "Madrid";
console.log(ciudad);
/*
La variable "Ciudad" no existe, existe ciudad que esta en minuscula
*/
// 3
function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}
console.log(sumar(2, 3));
/* 
No devuelve nada falta el return de resultado
*/

//4
let i = 1;
while (i > 5) {
  console.log(i);
  i++;
}
/*
i nunca va a ser mayor q 5 por lo q no se va a ejecutar tendria q ser <= que 5 mientras i sea menos o = a 55
*/

// 5
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo +  nombre);
/*
Sobra la coma
*/
//6
let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[3]);
/* 
Las posiciones de los arrays empiezan desde 0, por lo tanto el lugar 3 no existe 0 1 2 3(no hay)
*/
//7
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCase());
/* 
Es toLowerCase sobraraba una e
*/
//8
let edad = 18;
if (edad = 18) {
  console.log("Tienes 18 años");
}
/* 
Esta asignando no comparando
*/
//9
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++){
  console.log(numeros[i]);
}
/*
El punto y coma dsp del for
*/
//10
let palabra = "javascript";
for (let i = 0; i < palabra.length; i++) {
  console.log(palabra[i]);
}
/* 
Por el <= ya q se va a pasar 
*/
