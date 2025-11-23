// Con for
let ncolumnas = prompt("Dime el número de columnas");
let altura = prompt("Dime la altura");
let ancho = prompt("Dime el ancho");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + altura + '">');

for (let i = 0; i < ncolumnas; i++) {
    document.write('<td width="' + ancho + '">&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');

// Con while
let columnas1 = prompt("Número de columnas:");
let alto1 = prompt("Altura");
let ancho1 = prompt("Anchura de las celdas");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + alto1 + '">');

let i = 0;
while (i < columnas1) {
    document.write('<td width="' + ancho1 + '">&nbsp;</td>');
    i++;
}

document.write('</tr>');
document.write('</table>');
