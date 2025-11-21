window.onload = ()=> {

    let lista = document.getElementById("lista");
    let btn = document.getElementById("boton");
    btn.addEventListener("click",()=>{
        let continput = document.getElementById("in").value;
        let nuevoli = document.createElement("li");
        nuevoli.innerHTML = continput;
        // poner el nuevo li cmo hijo del ul
        lista.appendChild(nuevoli);
        document.getElementById("in").value = "";
    })

    let botonborrar = document.getElementById("borrar");
    botonborrar.addEventListener("click",()=>{
        lista.removeChild( document.getElementsByTagName("li")[0] );
    })

    lista.addEventListener("click",(e)=>{
        console.log(e.target);
        if(confirm("Seguro que quieres borrar: "+e.target.innerHTML)){
            lista.removeChild( e.target);
        }
    })
}