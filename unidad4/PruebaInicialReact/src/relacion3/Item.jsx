import { useState } from "react";

function Item({nombre,onDelete,onNuevoTexto}){
    const [modoEdicion,setmodoEdicion]=useState(false);
    const [nombreEditado,setnombreEditado]=useState({nombre}); 
    let resultao;
    function entraEdicion(){
        setmodoEdicion(true);
    }
    function guardaCambios(){
        setmodoEdicion(false);
        onNuevoTexton(nombreEditado);
    }
    if(!modoEdicion){
        resultao = <li >{nombre} <button onClick={entraEdicion}>Editar</button><button onClick={onDelete}>Borrar</button></li> 
    }else
        resultao = <li><input value={nombreEditado} onChange={(e)=>{e.target.value}}></input></li>


    
}
export default Item