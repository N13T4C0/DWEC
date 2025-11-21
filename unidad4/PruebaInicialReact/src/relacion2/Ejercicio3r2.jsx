import { useState } from "react"

function Ejercicio3r2(){

    const [contenido,setContenido]=useState("");
    function cambiar(){
        setContenido(contenido)
    }
    function limpiar(){
        setContenido("");
    }
    return(
        <>
            <input type="text" value={contenido} onChange={e=>setContenido(e.target.value)}/>
            <p>{contenido}</p>
            <p>Caracteres: {contenido.length}</p>
            <button onClick={limpiar}>Limpiar</button>
        </>
    )

}
export default Ejercicio3r2