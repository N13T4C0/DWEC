console.log("Bienvenido al juego de piedra papel o tijera, solo tienes 3 mov validos, que son: Piedra, Papel,Tijeras, el juego termina cuando uno de los dos haya ganado");
let juego = (jugador1,jugador2)=>{
    let jug = true;
    let ganador =0;
    while(jug && ganador==3){
        if(jugador1&&jugador2!= "Piedra"||"Tijeras"||"Papel"){
            console.log("Mov ilegal");
            return jug = false;
        }else if(jugador1=="Piedra"&&!jugador2=="Piedra"){
            ganador++;
        }     
    }
}