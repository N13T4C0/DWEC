window.onload = ()=>{
    lista();
}
function lista(){
    let reset = document.getElementById("borrar");
    let lista = document.getElementById("lista");
    let boton = document.getElementById("guardar");
    boton.addEventListener("click",(e)=>{
        let input = document.getElementById("bus").value;
        let nuevoli = document.createElement("li");
        let nuevoedit = document.createElement("button");
        let nuevoBorrar = document.createElement("button");
        nuevoedit.innerHTML = "EDITAR";
        nuevoBorrar.innerHTML = "BORRAR";
        nuevoli.innerHTML = input;
        // ponemos como hijo
        lista.appendChild(nuevoli);
        nuevoli.appendChild(nuevoedit);
        nuevoli.appendChild(nuevoBorrar);

        nuevoBorrar.addEventListener("click",(e)=>{
            let borr = e.target.parentElement;
            lista.removeChild(borr);
        })
        nuevoedit.addEventListener("click",(e)=>{
            let textOriginal = nuevoli.textContent;
            nuevoli.innerHTML="";
            let nuevoinput = document.createElement("input");
            nuevoinput.value = "";
            nuevoli.appendChild(nuevoinput);
            nuevoinput.addEventListener("keydown",(e)=>{
                if(e.key=="Enter"){
                    nuevoli.innerHTML= nuevoinput.value;
                    nuevoli.appendChild(nuevoedit);
                    nuevoli.appendChild(nuevoBorrar);
                }
            })

        })
        reset.addEventListener("click",()=>{
            lista.removeChild(nuevoli);
        })
        document.getElementById("bus").value= "";
    })
}