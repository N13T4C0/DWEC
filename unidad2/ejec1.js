// // Nivel  1
// // 1
// let cad1 = "123";
// let cad2 = "3.14";
// let cad3 = "abc";
// console.log(Number(cad2));
// console.log(parseFloat(cad1));
// console.log(parseInt(cad3));

// // 2
// let valor = Number(prompt("Dime un valor y t digo si es entero"));
// if(Number.isInteger(valor)){
//     console.log("Es entero");
// }
// else console.log("No es entero");
// // 3
// isNaN(NaN);
// isNaN("hello");
// isNaN(undefined);
// isNaN(0/0);
// isNaN(parseInt("abc"));
// // 4
// let division = 1 / 0;
// console.log(division); // infinito pone
// if(Number.isFinite(division)){
//     console.log("Es infinito");
// }
// // 5
// let nm = 3.141592;
// console.log(nm.toFixed(2));
// console.log(nm.toFixed(4));
// console.log(nm.toFixed(6));
// // 6
// let cinetifica = 123456;
// console.log(cinetifica.toExponential(2));
// // 7
// let numerin = 255;
// console.log(numerin.toString(2));
// console.log(numerin.toString(8));
// console.log(numerin.toString(16));
// // 8
// let illo = 123.456789;
// console.log(illo.toPrecision(4));
// console.log(illo.toPrecision(7));
// 12
function numValido(numerin) {    
    let val = "";
if (!isNaN(numerin)) {
    val = "Es un num";
    if (Number.isInteger(numerin)) {
        val = "Es entero";
    } else {
        val = "Es decimal";
    }
} else {
    val = "No es un num valido";
}
return val;
}
console.log(numValido());

