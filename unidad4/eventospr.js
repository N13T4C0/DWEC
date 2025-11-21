// cmo si fuera el main en jva
window.onload=()=>{
    iniciaEventos();

};
function iniciaEventos(){
    // quiero capturar eventos
    let dv1 = document.getElementById("div1");
    let dv2 = document.getElementById("div2");
    // defino evebntos a este div
    dv1.addEventListener("mouseover",cambiaColor);
    dv1.addEventListener("mouseout",cambiaColorSalida);

    dv2.addEventListener("mouseover",cambiaColor);
    dv2.addEventListener("mouseout",cambiaColorSalida);
    document.addEventListener("mousemove",(E)=> { 
        if(E.clientX>500)
            E.target.style.backgroundColor="pink";
        else if(E.clientY<400)
            E.target.style.backgroundColor="purple";
    });
}

function cambiaColor(event){
    if(event.altKey)
      event.target.style.backgroundColor = "red";
    // para tdo la pagin apodemos usar en vez de event.target document.body
    else if(event.ctrlKey)
        event.target.style.backgroundColor = "yellow";
    else 
        event.target.style.backgroundColor = "blue";
}
function cambiaColorSalida(event){
    event.target.style.backgroundColor = "white";
}