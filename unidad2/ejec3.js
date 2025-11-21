// 1 
let hora = new Date();
console.log(hora);
// 2
let mifecha = new Date(2006,7,19);
console.log(mifecha);
// 3
console.log(mifecha.getFullYear());
console.log(mifecha.getMonth());
console.log(mifecha.getDate());
console.log(mifecha.getDay());
console.log(mifecha.getHours());
console.log(mifecha.getMinutes());
console.log(mifecha.getSeconds());
// 4
console.log(hora.toDateString());
console.log(hora.toTimeString());
// Nivel 2
// 5
function sumaDia(fecha,dias){
    let fechaa = new Date(fecha);
    let mildi = dias * 60 * 60 * 24 * 1000;
    return (fechaa+mildi);
}
console.log(sumaDia(2007,8,19));

// 6
let fechaact = new Date();
let fechafin = new Date(2025,12,31);
let mili = fechafin -fechaact;
let dias1 = (fechafin-fechaact)/(1000*60*60*24);
console.log("Quedan:"+Math.floor(dias1)+"dias");
// 7
let fecha1 = new Date(2008,9,10);
let fecha2 = new Date(2007,9,10);
if (fecha1>fecha2){
    console.log("La fecha: "+fecha1+" es posterior");
} else console.log("La fecha: "+fecha2+" es posterior");
// hacer ejec 3 date mas el reloj
// 8
function primerDiaSemana(ano, mes) {
  const fecha = new Date(ano, mes - 1, 1);
  const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const dia = fecha.getDay();

  return diasSemana[dia];
}

// Ejemplo de uso:
console.log(primerDiaSemana(2025, 9)); // Devuelve el día de la semana del 1 de septiembre de 2025
// 9
let iso = new Date();
let nuevo = iso.toISOString();
// 10
const fecha = new Date(2025, 8, 25, 20, 23); 

// Mostrar en hora local
console.log("Hora local:", fecha.toString());

// Mostrar en hora UTC
console.log("Hora UTC:", fecha.toUTCString());
// 11

// 12
const ahora = new Date();

console.log("🇪🇸 Español:", new Intl.DateTimeFormat('es-ES').format(ahora));
console.log("🇺🇸 Inglés:", new Intl.DateTimeFormat('en-US').format(ahora));
console.log("🇯🇵 Japonés:", new Intl.DateTimeFormat('ja-JP').format(ahora));
// 13
const hoy = new Date();
const añoNuevo = new Date(hoy.getFullYear() + 1, 0, 1);
const diferencia = añoNuevo - hoy;

const totalSegundos = Math.floor(diferencia / 1000);
const segundos = totalSegundos % 60;
const minutos = Math.floor(totalSegundos / 60) % 60;
const horas = Math.floor(totalSegundos / 3600) % 24;
const dias = Math.floor(totalSegundos / (3600 * 24));

console.log("Fartan "+dias+horas+" horas "+minutos+"minutos y"+ segundos+" segundos pa año nuevo");
// 14
function calcularAno(edad){
  let feca = new Date(edad);
  let fechoy = new Date();
  let año = fechoy.getFullYear()-edad.getFullYear();
  let mesi = fechoy.getMonth()-edad.getMonth();
  let dii = fechoy.getDay()-edad.getDay();
  
  return "Tiene "+año+" "+mesi+" y "+dii+" dias";
}
calcularAno(2007,11,9);


// Ejemplo:

//15
const año = 2025;
const mes = 8; 
const diasEnMes = new Date(año, mes + 1, 0).getDate();
const calendario = [];
let i = 0;
while (i < diasEnMes) {
  calendario[calendario.length] = new Date(año, mes, i + 1);
  i++;
}
console.log(calendario);
// 16 cn chat
let hoyy = new Date();
let añoo = hoy.getFullYear();
let mess = hoy.getMonth();

let viernes13;

while (!viernes13) {
  let posible = new Date(añoo, mess, 13);
  if (posible > hoyy && posible.getDay() === 5) {
    viernes13 = posible;
  }
  mess++;
  if (mess === 12) {
    mess = 0;
    añoo++;
  }
}

console.log("pox ximo viernes 13:", viernes13.toDateString());
