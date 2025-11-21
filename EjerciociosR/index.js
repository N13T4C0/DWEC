// to fixed
window.onload = ()=>{
    fixed();
    date();
    string();
    geo();
    reduce();
    clases();
   
}
function fixed(){
    let fix = document.getElementById("fix");
    let numero = 3.1212312312;
    let nm = 123456;
    let result = fix.innerHTML = "<p>Numero fixeado cn 2 decimales :"+numero.toFixed(2)+"</p>"+" cn el expo 2"+nm.toExponential(2);
    
    return result;
}
function date(){
    let date = document.getElementById("date");
    let hoy = new Date();
    let mañana = new Date("2025-11-28");
    let año = hoy.getFullYear();
    let mes = hoy.getMonth();
    let dia = hoy.getDay();
    let calculofechas = Math.floor((mañana.getTime()-hoy.getTime())/1000/60/60/24);
    let conv = hoy.toDateString();
    let conv2 = hoy.toTimeString();

    let result = date.innerHTML = "<p>La fecha de hoy es: </p>"+hoy + "\n <p>El año es</p>"+año+"\n<p> Conv cn date String:</p>"+conv+"\n <p> Cn timeString</p>"+conv2+"\n<p>Quedan : </p>"+calculofechas;
    return result+ año;
}
function string(){
    let abc = "avbvsdvsd";
    console.log(abc.indexOf("d"));
    console.log(abc.lastIndexOf("d"));
    let cad2 = "Hola soy Nieto";
    console.log(cad2.substring(0,4)+cad2.substring(4,8));
    console.log(cad2.slice());
}
function geo(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log("Las lon son: "+lat+lon);
        });

    }
}
function reduce(){
    let num = [1,2,3,4,5,6];
    let suma = num.reduce((acc,num)=>acc+num,0)
    console.log("La suma es"+suma);
}

 class estudiante{
        constructor(nombre,apellidos){
            this.nombre=nombre;
            this.apellidos=apellidos;
        }
        saludar(){
            return "Hola"+this.nombre+this.apellidos;
        }
}
function clases(){
    let pe = new estudiante("Manuel","Perez");
    console.log(pe.saludar());
}
