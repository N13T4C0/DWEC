//1
let frutas = ["pera","manzana","banana","naranja","melon"];
console.log(frutas [0]+" "+frutas[frutas.length-1]);
//2
frutas.push("mango");       // Añadir al final
frutas.unshift("fresa");    // Añadir al inicio
console.log("Después de añadir:", frutas);
frutas.pop();               // Eliminar der final
frutas.shift();             // Eliminar  ini
console.log("Después de eliminar:"+ frutas);
// 3
// Usando for clásico
for (let i = 0; i < frutas.length; i++) {
    console.log("for:"+ frutas[i]);
}

// Usando for...of
for (let fruta of frutas) {
    console.log("for...of:"+ fruta);
}

// Usando forEach
frutas.forEach((fruta, index) => {
    console.log("forEach "+index+": "+ fruta);
});
let numeros = [10, 20, 30, 40, 50];

console.log("30", numeros.includes(30));       
console.log(" 40:", numeros.indexOf(40));      // pa e indice
console.log(" 99:", numeros.indexOf(99));      
let frutasTropicales = ["piña", "papaya"];

// Usando concat()
let todasLasFrutas1 = frutas.concat(frutasTropicales);
console.log("Concat:", todasLasFrutas1);

// Usando spread operator
let todasLasFrutas2 = [...frutas, ...frutasTropicales];
console.log("Spread:", todasLasFrutas2);    
//6
let numerin = [1,2,3,4,5,6];
let duplicados = numerin.map(num => num *2);
console.log(duplicados);
//7
let ns = numerin.filter(numm => (numm%2)==0);
console.log(ns);
// 8
let valorinicial =0;
let sumados = numerin.reduce((acu, valor)=>acu+valor,valorinicial);
console.log(sumados);
// 9
let arraNombres = ["Zumala","Manolo","Sergio","Zumela","Abraham"];
let ordenaos = arraNombres.sort();
console.log(ordenaos);
let inverso = arraNombres.reverse();
console.log(inverso);
//10
arratext = numerin.join(",");
console.log(arratext);
// 11
let cade = "Hola ola oli";
let cadenasepara = cade.split(" ");
console.log(cadenasepara);
// 12 acabar la relacion de ejercicios
let arraydupli = ["uno","dos","tres","uno","uno"];
let arraysin1 = [...new Set(arraydupli)];
let arraysin = arraydupli.filter((valor, indice, arraycomp) => {
  return arraycomp.indexOf(valor) === indice;
});
console.log(arraysin);
console.log(arraysin1);
// 13
let arraynum = [1,23,4,5,6,10];
console.log(Math.max(...arraynum));
console.log(Math.min(...arraynum));
// 14
let arraypla = [[1,2],[3,4]];
let arrayaplanao = arraypla.flat(); // para aplanar el array
console.log(arrayaplanao);
// 15
let array4 = [1,2,3,4,1,2,3,4,1];
console.log("Ejercicio 15");
numapariciones =0;
array4.forEach((valor)=>{
    if(valor==1)
      numapariciones++;
});
// cn el reduce
function cuantasVecesRepie(numero,array4){
  let numeroAp=0;
  return array4.reduce((numeroAp,v)=>{
    if(v==numero)
      return ++numeroAp;
    else 
      return numeroAp;
  },0)
}
console.log(cuantasVecesRepie(3,array4));
console.log(numapariciones); 
// 16
const personas = [
  { nombre: "Ana" },
  { nombre: "Luis" }
];
const edades = [
  {  edad: 23 },
  {  edad: 30 }
];
let arraydeuno = personas.map(deuno=>deuno.nombre);
console.log(arraydeuno);
// 17
const combinados = personas.map((persona, i) => {
  return {
    nombre: persona.nombre,
    edad: edades[i].edad
  };
});

console.log(combinados);
// 18
const usuarios = [
  { nombre1: "Ana", edad1: 25 },
  { nombre1: "Luis", edad1: 30 },
  { nombre1: "Marta", edad1: 20 }
];
console.log(usuarios.sort((a, b) => a.edad1 - b.edad1));
// 19
const set = new Set([1, 2, 3, 4, 5]);
console.log("Hay alguien cn la edad de 13?"+set.has(12)+[...set].sort((a,b)=>a-b));
// 20
let numerit = [1, 2, 3, 4, 5, 6];

let sumaCuadradosPares = numerit.filter(n => n % 2 == 0).map(n => n * n).reduce((acc, n) => n+acc,0); // el 0 para el valor inicial 

console.log(sumaCuadradosPares);
