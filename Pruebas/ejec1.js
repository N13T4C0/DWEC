// 1
let nombre = Number(prompt("Dime un numero"));
if (nombre>0){
    console.log("Es positivo");
}else{
    console.log("Es negativo");
}
//2
let edad=18;
if(edad>=18){
    console.log("Eres mayor edad");
}
// 3
let duda= Number(prompt("Dime un numero"));
if(duda % 2 == 0){
    console.log("Es par");
}  else{
    console.log("Es impar");
}
// 4
let nota = Number(prompt("Dime una nora"));
if(nota>=5){
    console.log("Aprobado");
}else{
    console.log("Suspenso");
}
// 5
let n1 = Number(prompt("Dime el primer num"));
let n2 = Number(prompt("Dime el segundo num"));
if (n1>n2){
    console.log("N1 es mayor");
}if(n2>n1){
    console.log("N2 es mayor")
} else{
    console.log("Son iguales");
}
// 6
let semana = prompt("Dime un numero pa lka semana");
switch(semana){
    case "1" : console.log("Lunes");
    break;
    case "2" : console.log("Martes");
    break;
    case "3" : console.log("Miercoles");
    break;
      case "4" : console.log("Jueves");
    break;
    case "5" : console.log("Viernes");
    break;
    case "6" : console.log("Sabado");
    break;
    case "7" : console.log("Domingo");
    break;
    default:
        console.log("El numero no es invalido");
}
// 7
let opcion = prompt("Elige una opcion");
switch(opcion){
    case "1" : console.log("Opcion a seleccionada");
    break;
    case "2" : console.log("Opcion b seleccionada");
    break;
    case "3" : console.log("Opcion c seleccionada");
    break;
    default:
        console.log("opcion no valdia");
}
// 8
let sema = prompt("Dime el coloh");
switch(sema){
    case "rojo" : console.log("Alto");
    break;
    case "amarillo" : console.log("Cuidao");
    break;
    case "verde" : console.log("Pa lante");
    break;
}
// 9
let fruta = prompt("Dime la fruta");
switch(fruta){
    case "manzana" : console.log("Roja");
    break;
    case "platano" : console.log("amarillo");
    break;
    case "uva" : console.log("Morada");
    break;
    default:
        console.log("Fruta no reconocida");
}
//10
let notaa = prompt("Dime la nota escolar");
switch(sema){
    case "A" : console.log("Excelente");
    break;
    case "B" : console.log("Muy bn");
    break;
    case "C" : console.log("Bien");
    break;
    case "D" : console.log("Suficiente");
    break;
    case "F" : console.log("Reporbado");
    break;
}
// ejercicio 1: 2
let edad1 = 2;
console.log(edad1);
edad1 = 4;
console.log(edad1);
// ejercicio 1: 3
const pais = 4;
console.log(pais);
const pais1 = 6;
console.log(pais1);
// ejerc 4
{
    var x =10;
}
console.log(x);
// no se puede mostrar
{
    let y = 20;
}
console.log(y);
