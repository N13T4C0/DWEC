// 1
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres (si/no)");
// Usa un condicional con && para determinar si puede entrar
let sino = edad>=18 && permiso == "si" ? console.log("Pa dentro") : console.log("Pa fuera");
// 2
let matematicas = prompt("¿Aprobo mates? (si/no)");
let fisica = prompt("¿Aprobo fisica? (si/no)");
let quimica = prompt("¿Aprobo quimica? (si/no)");

let aprobao = matematicas=="si" && fisica=="si" && quimica=="si" ? console.log("pasas") : console.log("No pasas");
// 3
let contraseña = prompt("Ingrese la contraseña");


if(contraseña!="usuario"){
    console.log("Incorrecto");
}else 
    console.log("Correcto");
// 4
let numero = Number(prompt("Ingrese un num"));
    if(numero>=10 && numero<=50){
        console.log("esta en el rango");
    }
    else console.log("No esta en el rango");

// 5
let edadd = Number(prompt("Ingrese su edad"));
let tutor = prompt("Tiene tutor presente? (si/no)");

if(edadd>=18 || tutor=="si"){
    console.log("pa lanate");
}else console.log("nop");
// terniario
let tutt = edadd>=18 || tutor=="si" ? "palante" : "no";
console.log(tutt);
// 6
let usuario = prompt("Ingrese su usuario");
let contrasena = prompt("Ingrese su contraseña");
// Condicional usando && y ||
let uss = usuario=="admin" && contrasena=="1234" || usuario=="invitado" ? "palante" : "nopp";
console.log(uss);
// 7
let numer = Number(prompt("Ingrese un número"));
let positivo = numer>0 && numer<100 ? "Si es" : "No es";
console.log(positivo);
// 8
let dia = prompt("Ingrese un dia de la semana");
let semana = dia=="lunes" || dia=="martes" || dia=="miercoles" || dia=="jueves" || dia=="viernes" ? "A tlabaja" : "No tlabaja";
console.log(semana);
// 9
let edad9 = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");

let vota = edad9>=18 && nacionalidad=="españa" ? "si votas" : "no votas";
console.log(edad9);
// 10
let usu, contr;

while (!(usu== "admin" && contr == "1234")) {
    usu = prompt("Usuario:");
    contr = prompt("Contraseña:");
    console.log("No permitido");
}
console.log("Acc permitido");
