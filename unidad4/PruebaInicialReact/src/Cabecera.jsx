// importamos el estado
import { useState } from 'react';
import BotonLaura from './BotonLaura';

function Cabecera(){
    const [contador,setContador]= useState(0);
    const [miArray,setMiArray]=useState([1,2]);
    const [contenidoInput,setContenidoInput]=useState("jose");
    function pulsoBoton(){
        setContador(contador+1);
        setMiArray([...miArray,contenidoInput]);
        setContenidoInput("");

    }
    let listaElementos = miArray.map((elementoDeArray)=><li>{elementoDeArray}</li>)
   return(
    <>
    <h2>Contador = {contador}</h2>
    <h3>Contenido del input = {contenidoInput}</h3>
    <input type="text" value={contenidoInput} onChange={e=>setContenidoInput(e.target.value)}>
    
    </input>
    <button onClick={pulsoBoton}>Añadir</button>
    <ul>
        {listaElementos}
    </ul>
    </>
   )
}
export default Cabecera