// 1
let b = "Cabecera h";
for(let a=1;a<7;a++){
    document.writeln("<h"+a+">"+b+"</h"+a+">");
}
// 2
let ncolumnnas = prompt("Dime el numero de columnas");
let altura = prompt("Dime la altura");
let ancho = prompt("Dime el ancho");

document.write("<table border= \"0\" cellspacing= \"2\" bgcolor= \"black\" width= \"200\">");
document.write("<tr bgcolor= \"white\" height=" + alto + ">");
for(let i =0;i<ncolumnnas;i++){
    document.write("<td width="+ ancho + ">&nbsp;</td>");
}
document.writeln("</tr>");
document.writeln("</table>");

//
