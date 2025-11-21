// 1
function num(n){
    return Math.abs(n);
}
console.log(num(-12));
// 2
let nume = Number(prompt("Dime un numero"));
console.log(Math.round(nume)); // redondeado
console.log(Math.ceil(nume)); // redondeado por exceso
console.log(Math.floor(nume)); // por defecto redondeao
// 3
console.log(Math.pow(5,3));
console.log(Math.sqrt(81));
// 4
const array = [10,-5,3,99,42];
console.log(Math.max(...array));
console.log(Math.min(...array));
// nivel 2
// 5
let random = Math.random()
console.log(random);
// 6
let randi = Math.random() * (6 - 1) + 1;
let res = Math.floor(randi);
console.log(res);
// de otra forma
console.log(Math.floor(Math.random()* (6 -1 )+1));
// 7
let min = prompt("Dime el primer num min");
let max = prompt("Dime el primer num max");

console.log(Math.floor(Math.random() *(max - min)+min));
// nivel 3
// 8
let ang = 45;
let grados = ang * (Math.PI/180);
console.log(Math.sin(grados));
console.log(Math.cos(grados));
// 9
let tangente = Math.sin(60)/Math.cos(60);
// 10
console.log(Math.log(10));
// 11
let juego;
let ra = Math.floor(Math.random() * (100 - 1) +1);
while(juego !== ra){
     juego = Number(prompt("Adivina el num"+ra));
    if(juego>ra)
        console.log("Es menor");
    else console.log("Es mayor");
}
console.log("has acertado");
// 12
let x1 = 7;
let x2 = 10;
let y1 = 5;
let y2= 3;
console.log("La distacia es de : "+Math.sqrt(Math.pow((x2 -x1),2)+ Math.pow((y2-y1),2)));
// 13
let ruleta = Math.floor(Math.random()*(36-1)+1);
console.log("El ganador esss:"+ruleta);
// 14
let contra = " ";
let intentos = 0;
while(intentos!=8){
    let passs = Math.floor(Math.random()*(8-1)+1);
    console.log(passs+",");
    intentos++;
}
