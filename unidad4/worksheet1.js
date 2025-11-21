window.onload=()=>{
    /* ejercicio1
    document.addEventListener("click",()=>{
        alert("Errorr");
    });
    */
    //ejercicio 2 
    /*

    document.addEventListener("mousemove",(e)=>{
        console.log(e.clientX,e.clientY);
    })
    */
   // ejerccicio 4
    function crearCanvas() {
        const tabla = document.getElementById("tabla");
        for (let i = 0; i < 100; i++) {
            const fila = document.createElement("tr");
            for (let j = 0; j < 100; j++) {
                const celda = document.createElement("td");
                fila.appendChild(celda);
        }
            tabla.appendChild(fila);
    }
    }
    crearCanvas();
   let t1 = document.getElementById("tabla"); // tmb se puede cn getElementsbyTagName
    t1.addEventListener("mousemove",(e)=>{
        if(e.target.tagName == "TD"){
            if(e.ctrlKey){
                e.target.style.backgroundColor="pink";
            } else if(e.shiftKey){
              e.target.style.backgroundColor="black";
            }
        } 

    });
    // ejercicio 5
    t1.addEventListener("mousemove",(e)=>{
        if(e.target.tagName="TD"){
            if(e.altKey){
                e.target.style.backgroundColor="white";
            }
        }
    })
    // borrado cn el boton
    let boton = document.getElementById("boton");
    boton.addEventListener("click",()=>{
        t1.innerHTML= "";
            crearCanvas();
    })

    // ejerc 9
    let newX=0,newY=0,empzX=0;empzY=0;
    let imagen = document.getElementById("imagen");
    // imagen.addEventListener("mousemove");
     let posX=0,posY=0;
     let startX=0;startY=0;
    // imagen.addEventListener("mousemove",(e)=>{
    //     // empiezo
    //     if(e.shiftKey){
    //         posX= e.clientX;
    //         posxY= e.clientY;
            
    //         imagen.style.position="absolute";
    //         imagen.style.left = posX+"px";
    //         imagen.style.top= posY + "px";
    //     }
    // })
    // // de otra forma del guiri
    // let ima = document.getElementById("imagen");
    // ima.addEventListener("mousedown",mouseDown);
    // function mouseDown(e){
    //     startX= e.clientX;
    //     startY = e.clientY;
    //     document.addEventListener("mousemove",mouseMove);
    //     document.addEventListener("mouseup",mouseUp);
    // }
    // function mouseMove(e){
    //     // oara calcular cuanto se ha movido desde la ultima posicion
    //     newX = startX - e.clientX;
    //     newY = startY - e.clientY;
    //     // lo actualizamos
    //     startX = e.clientX;
    //     startY = e.clientY ;
        
    //     imagen.style.position= "absolute";
    //     imagen.style.top = (imagen.offsetTop - newY)+"px";
    //     imagen.style.left = (imagen.offsetLeft - newX)+"px";

    // }
    // function mouseUp(e){
    //     document.removeEventListener("mousemove",mouseMove);
    // }

    // en clase
    // let clickado = false;
    // imagen.addEventListener("click", (e)=>{
    //     if(!clickado){
    //         clickado=true;
    //     }else
    //     clickado=false;
    // })
    // document.addEventListener("mousemove",(e)=>{
    //     if(clickado){
    //         console.log("Has clicakdo en las coords:"+e.clientX+e.clientY);
    //         imagen.style.position= "absolute";
    //         imagen.style.top = e.clientY +"px";
    //         imagen.style.left = e.clientX+"px";
    //     }
    // })
    // para todas las imagenes
    let clickado = false;
    let ima2 = document.getElementById("imagen")
    ima2.addEventListener("click", (e)=>{
        if(!clickado){
            clickado=true;
            startX= e.clientX-ima2.offsetLeft;
            startY = e.clientY-ima2.offsetTop;
        }else
        clickado=false;
    })
    document.addEventListener("mousemove",(e)=>{
        if(clickado){
            console.log("Has clicakdo en las coords:"+e.clientX+e.clientY);
            imagen.style.position= "absolute";
        ima2.style.left = (e.clientX - startX)+"px";
        ima2.style.top = (e.clientY - startY)+"px";
        }
    })
    
    // para tds las imagenes
    let clickado2 = false;
    let startX2=0;startY2=0;
    let ima3 = document.getElementsByTagName("IMG");
    ima3.addEventListener("click", (e)=>{
        if(!clickado2){
            clickado2=true;
            startX2= e.clientX-ima3.offsetLeft;
            startY2 = e.clientY-ima3.offsetTop;
        }else
        clickado2=false;
    })
    document.addEventListener("mousemove",(e)=>{
        if(clickado2){
            console.log("Has clicakdo en las coords:"+e.clientX+e.clientY);
            ima3.style.position= "absolute";
        ima3.style.left = (e.clientX - startX2)+"px";
        ima3.style.top = (e.clientY - startY2)+"px";
        }
    })
    // para la propagacion necesitamos tener tds las img en un div cn una id como hemos hecho antes, y para coger el id de cada img cn el e.target
    
    // ahora lo hacemos cn el drag 
    
}
