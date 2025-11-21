    let seg =0;
    let intervalo;
window.onload = ()=>{
    cronometro();
}
function cronometro(){
    let reloj = document.getElementById("reloj");
    let empieza = document.getElementById("start");
    let parar = document.getElementById("stop");
    let reset = document.getElementById("reset");
    empieza.addEventListener("click",()=>{
        start();
    })
    parar.addEventListener("click",()=>{
        stop();
    })
    reset.addEventListener("click",()=>{
        res();
    })

}
function res(){
    seg=0;
    hora();
}
function hora(){
        let reloj = document.getElementById("reloj");
        let minutos = Math.floor(seg/60);
        let segundos = seg%60;

        let forminutos = minutos.toString().padStart(2, "0");
        let forsegundos = segundos.toString().padStart(2, "0");
        reloj.textContent = forminutos+":"+forsegundos;
}
function start(){
    intervalo = setInterval(()=>{
        seg++;
       hora();
       
    },1000);
}
function stop(){
    clearInterval(intervalo);
    intervalo = null;

}