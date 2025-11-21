//ejercicio 4.12
let ncolumnnas = prompt("Dime el numero de columnas");
let altura = prompt("Dime la altura");
let ancho = prompt("Dime el ancho");

document.write("<table border="0" cellspacing="2" bgcolor="black" width="200">");
document.write("<tr bgcolor="white" height="' + alto + '">");
for(let i =0;i<ncolumnnas;i++){
    document.write("<td width="" + ancho + "">&nbsp;</td>");
}
document.writeln("</tr>");
document.writeln("</table>");

// cn while
let columnas1 = prompt("número de columnas:");
let alto1 = prompt("altura");
let ancho1 = prompt("anchura de las celdas");

document.write("<table border="0" cellspacing="2" bgcolor="black" width="200">");
document.write("<tr bgcolor="white" height="" + alto + "\">");

let i = 0;
while (i < columnas) {
    document.write("<td width=\"" + ancho + "\">&nbsp;</td>");
    i++;
}

// Cierre de la fila y la tabla
document.write("</tr>");
document.write("</table>");
