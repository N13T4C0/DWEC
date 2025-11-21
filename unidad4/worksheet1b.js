window.onload = ()=>{
    act1();
    act2();
    act3();
    act4();
    act5();
    act6();
    act7();
    avnimaSECUENCIA(["rojo", "azul", "verde", "amarillo"]);

}

function act1(){
      // ejercicio 1 de caza de colores
    let primero = elegirColor();
    let color = document.getElementById("colores");
     color.addEventListener("click",(e)=>{
    if(e.target.id == primero){
        resul = alert("Has acertado");
        primero = elegirColor();
    }else{
        resul = alert("No has acertado has clickado en el: "+e.target.id);
        primero = elegirColor();
        }
    })
} 
function elegirColor (){
    let colorpre = document.getElementById("juegocolor");
    let colores = ["rojo","azul","verde","amarillo"];
    let coloran = Math.ceil(Math.random()*colores.length);
    let coloralea = colores[coloran-1];
    colorpre.innerHTML = "<p>El color que tienes que elegir es el:"+coloralea+"</p>";
    return coloralea;
}
function act2 (){
    let boton = document.getElementById("boton");
    boton.addEventListener("mouseover",(e)=>{
        boton.style.backgroundColor = "#e40000ff";
    })
    boton.addEventListener("mouseout",(e)=>{
        boton.style.backgroundColor = "#ffffffff"
    })
    boton.addEventListener("click",(e)=>{
        text = document.getElementById("boton");
        text.innerHTML = "hiciste clic";
    })
    
}

function act3 (){
    let letrilla = document.getElementById("resultadoLetra");
    letra = elegirLetra();
    document.addEventListener("keydown",(e)=>{
        if(e.key == letra ){
            letrilla.innerHTML = "<p>Has presionado la tecla correcta</p>";
            letra = elegirLetra();
        }
        else{
            letrilla.innerHTML= "<p>No has seleccionado la tecla correctas</p>";
            letra = elegirLetra();
        } 
    })
}
function elegirLetra(){
    let letra = document.getElementById("letra");
    let letras = ["a","b","q","w","e","k","v","l","z","f"];
    let random = letras[Math.ceil(Math.random()*letras.length-1)];
    letra.innerHTML = "<p>La letra es:</p>"+random;
    return random;
}
function act4(){
    let circulo = document.getElementById("circulo");
    Circulo();
    circulo.addEventListener("click",(e)=>{
        if(circulo.style.backgroundColor=="rgb(3, 174, 3)"){
            alert("refeljos rapidos");
            resetCirc(true);
            Circulo();
        }else{
            alert("Muy temprano");
            Circulo();
        } 
    })
}
function Circulo(){
    let remp = document.getElementById("time");
    let rantime = Math.ceil(Math.random()*2000)+3000;
    let circulo = document.getElementById("circulo");
    let tiempo = setTimeout(cambioColor,rantime)
    let gristime = setTimeout(() => resetCirc(false), rantime + 1000);
    remp.innerHTML = "<p>El color cambiara en:"+rantime+" seg</p>";
}
function cambioColor(){
    let circ = document.getElementById("circulo");
    circ.style.backgroundColor = "rgb(3, 174, 3)";
}
function resetCirc(click){
    let circ = document.getElementById("circulo");
    circ.style.backgroundColor =" rgb(111, 109, 109)";
    if(!click){
        let rantime2 = Math.ceil(Math.random() * 2000) + 5000;
        let cambioColor2 = setTimeout(Circulo, rantime2);
    }
}
function act5(){
    let resul;
    let numrandom = valoresAct5();
    let numero = document.getElementById("numero");

    numero.addEventListener("click",(e)=>{
        if(e.target.textContent==numrandom){
            resul = alert("Has acertado en num");
            numrandom = valoresAct5();
        }else{
            resul =alert("Has fallao");
            numrandom = valoresAct5();
        }
    })
}
function valoresAct5(){
    let letra = document.getElementById("letraran");
    let randnum = Math.ceil(Math.random()*9);
    letra.innerHTML = "<p>Tienes que escoger el num: </p>"+randnum;
    
    return randnum;
}
function act6(){
    let preguntas = document.getElementById("simon");
    preguntas.innerHTML = "<p>Elige el color rojo</p>";
    secAct6();
}   
function secAct6(){
    let preguntas = document.getElementById("simon");

    let i =0;
    let secuencia = ["rojo2","verde2","amarillo2","azul2"];
    let simon = document.getElementById("coloressimon");
    simon.addEventListener("click",(e)=>{
        if( e.target.id==secuencia[i]){
            console.log(e.target.id)
            if(e.target.id=="azul2"){
                resetCuadrado();
                alert("HAS GANADO EL SIMON DICE");
                act6();
            }else{
                cambioAcertado(secuencia[i]);
                i++;
                preguntas.innerHTML = "<p>Has acertado el color, el siguiente es: </p>"+secuencia[i];
            }
            
        }else {
            i=0;
            alert("No has acertado");
        }
        
    })
}

function cambioAcertado(color){
    let rojo2 = document.getElementById("rojo2");
    let azul2 = document.getElementById("azul2");
    let verde2 = document.getElementById("verde2");
    let amarillo2 = document.getElementById("amarillo2");

    if(color=="rojo2"){
        rojo2.style.backgroundColor = "rgba(104, 104, 104, 1)";
    }
    if(color=="azul2"){
        azul2.style.backgroundColor = "rgba(104, 104, 104, 1)";
    }
    if(color=="verde2"){
        verde2.style.backgroundColor = "rgba(104, 104, 104, 1)";
    }
    if(color=="amarillo2"){
        amarillo2.style.backgroundColor = "rgba(104, 104, 104, 1)";
    }
}

function resetCuadrado(){
    rojo2.style.backgroundColor =" rgba(230, 2, 2, 1)";
    // forma original para el verde
    verde2.style.backgroundColor = "rgba(0, 255, 17, 1)";
    // forma original para el amarrillo
    amarillo2.style.backgroundColor = "rgba(242, 255, 0, 1)";
    // forma original para el azul
    azul2.style.backgroundColor = "rgba(0, 4, 255, 1)";
    
}
//
let secuenciaSimon = [];
let secuenciaJugador = [];
let esperandoClick = false;

function avnimaSECUENCIA(arrayMov) {
    const colores = {};
    ["rojo", "azul", "amarillo", "verde"].forEach(color => {
        colores[color] = document.getElementById(color + "2");
    });

    arrayMov.forEach((mov, i) => {
        setTimeout(() => {
            colores[mov].style.opacity = "1";
            setTimeout(() => {
                colores[mov].style.opacity = "0.5";
                if (i === arrayMov.length - 1) {
                    esperandoClick = true;
                    secuenciaJugador = [];
                    document.getElementById("simon").textContent = "¡Tu turno!";
                }
            }, 500);
        }, i * 1000);
    });
}

function iniciarSimon() {
    const colores = ["rojo", "azul", "amarillo", "verde"];
    secuenciaSimon = [];
    for (let i = 0; i < 4; i++) {
        secuenciaSimon.push(colores[Math.floor(Math.random() * colores.length)]);
    }
    esperandoClick = false;
    document.getElementById("simon").textContent = "Observa la secuencia...";
    avnimaSECUENCIA(secuenciaSimon);
}

function manejarClick(color) {
    if (!esperandoClick) return;
    secuenciaJugador.push(color);
    const i = secuenciaJugador.length - 1;
    if (secuenciaJugador[i] !== secuenciaSimon[i]) {
        document.getElementById("simon").textContent = "❌ Fallaste";
        esperandoClick = false;
    } else if (secuenciaJugador.length === secuenciaSimon.length) {
        document.getElementById("simon").textContent = "✅ ¡Bien hecho!";
        esperandoClick = false;
    }
}

["rojo", "azul", "amarillo", "verde"].forEach(color => {
    const div = document.getElementById(color + "2");
    div.style.opacity = "0.5";
    div.addEventListener("click", () => manejarClick(color));
});



function act7(){
    let recorrido =0;
    let barra = document.getElementById("barra");
    let boton = document.getElementById("botones");
    boton.addEventListener("click",(e)=>{
        if(e.target.id=="boton"){
            recorrido = recorrido+10;
            carr = recorrido.toString();
            if(recorrido==100){
                alert("HAS LLEGADO AL FINAL");
                barra.innerHTML = "<progress max=100 value=0 </progress>";
            }
            barra.innerHTML = "<progress max=100 value="+recorrido+" </progress>";
        }
    })

}