// 1
for(let a=1; a <11;a++){
    console.log(a);
}
// 2
for(let b=1;b<6;b++){
    console.log(b+b);
}
// 3
let numero = Number(prompt("Dime un numero"));
for(let c=1;c<11;c++){
    console.log(numero * c);
}

// 4
let n1 = 10;
while (n1>=1) {
    console.log(n1);
    n1--;
}
// 5
let numero4 = 1;
let suma = 0;

while (suma < 20) {
  suma += numero4;
  numero4++;
}

console.log("La suma final :", suma);

// parte 3 do while 6
let pregunta;
do {
    pregunta = prompt("Dime la contraseña");

} while(pregunta != "1234"){
    console.log("Contraseña correcta");
}
// parte 3 ejercicio 7 
let n4 = 1;
do {
    console.log(n4);
    n4++;
} while(n4<=5);
