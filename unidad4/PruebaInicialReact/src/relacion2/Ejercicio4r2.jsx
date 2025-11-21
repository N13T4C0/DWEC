import { useState } from "react";
import "./ejec4.css"
function Ejercicio4r2(){
   const [contenido,setContenido]=useState("");
    return(
        <>
        <p>{contenido}</p>
        <input type="text" value={contenido} onChange={e=>setContenido(e.target.value)} />
        <button onClick={()=> {setContenido("red")}}>Rojo</button>
        <button onClick={()=>{setContenido("green")}}>Verde</button>
        <button onClick={()=>{setContenido("blue")}}>Azul</button>

            <div className="cuadrao" style={{backgroundColor: contenido}}>
                

            </div>   
        </>
    )
}
export default Ejercicio4r2