// 1
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
 console.log(num1 / num2);

// 2
let numero = Number(prompt("Ingrese un número"));

let par = numero % 2 ? "No par" : "par";
console.log(par);

// 3
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
if(a>b && a>c){
    console.log("A es mayor");
}else if(b>a && b >c){
    console.log("B es mayor");
} else
    console.log("c es mayor");

// 4
let num = Number(prompt("Ingrese un número"));
for(let a=0;a<=10;a++){
    console.log(num+"x"+a+"= "+num*a);
}
// 5
let N = Number(prompt("Ingrese un número"));
for(let o=0;o<=N;o++){
    console.log(o);
}
// 6
let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt("Ingrese el número"+(i+1)));
    let cont= num>=0 ? positivos++ : negativos++;
}
console.log("Hay: "+positivos+"positivos y "+negativos+" negativos ");
// 7
let numm = Number(prompt("Ingrese un número, pa los primos "));
let n=2;
primo = true;
do {
    if(numm%n==0)
        primo=false;
    n++
}
while(n<numm && primo)
if (primo==true){
    console.log("Es primo");
}else 
    console.log("No es primo");
// 8
let numeroo = Number(prompt("Ingrese un nm facto"));
let factorial = 1;
let texto = "";

// Calcula el factorial con un bucle
for (let j = 1; j <= numeroo; j++) {
    factorial *= j;
    console.log("El factorial de " + j + " es: " + factorial);
    texto += j + " ";
}

console.log("Factorial final de " + numeroo + " es: " + factorial);
console.log("Secuencia usada: " + texto);
// 9
let N1 = Number(prompt("Ingrese un número(t devuelve los pares)"));
for(let y=0;y<N1;y++){
    if(y%2==0){
        console.log(y+" ");
    }
}
// 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    // Indica si el intento es mayor, menor o correcto
    if(intento>numeroSecreto){
        console.log("Es mas pequeño");
    } else if(intento<numeroSecreto){
        console.log("es mas grande");
    } else 
        console.log("Es el numero secreto");
}