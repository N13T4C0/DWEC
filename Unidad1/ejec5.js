// 1
let nombre = "Ana";
console.log(nombre);
/*Falta el punto y coma y una "
*/
// 2
let edad = 20;
console.log(edad);
/*
Se usa antes la variable antes de estar creada
*/
// 3
let a1 = 5;
let b1 = 10;
if (a1 == b1) {
  console.log("a es igual a b");
}
/*
Se esta asignando la variable en vez de compararlo
*/
// 4
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
/*
La variable i siempre va a ser menos que 5 ya que no hay un incremento de i
*/
// 5
function saludar(nombre1) {
  console.log("Hola " + nombre1);
}
saludar("Nieto");
/*
A la hora de llamar a la funcion no le pasamos ningun parametro
*/
// 6
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[2]);
/* 
Las posiciones de los arrays empiezan desde 0, por lo tanto el lugar 3 no existe 0 1 2 3(no hay)
*/
// 7
let persona = { nombre: "Ana", apellido: "perez", edad: 25 };
console.log(persona.apellido.toUpperCase());
/*
El apellido no existe, entonces deberiamos de crear apellido y darle un valor
*/
// 8
let a2 = 5;
let b2 = "10";
console.log(a2 + Number(b2));
/*
Esta intentando sumar una varible de tipo numero cn una variable de tipo String
*/
// 9
let nota = 8;
if (nota > 5)
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
/*
El punto y coma q hay en el if
*/
// 10
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
/* es por el =
*/

