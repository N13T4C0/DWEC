import { useState } from "react"

function Ejercicio6r2(){
    
        const [nombre,setNombre]=useState("");
        const [correo,setCorreo]=useState("");
        const [userData,setData]=useState("")
        const [array,setArray]=useState([]);
        const submit = (e)=>{
            e.preventDefault();
            let dato= nombre+ " "+ correo;
            setData(dato);
            setArray([...array,dato]);
            setCorreo("");
            setNombre("");
        }
        function limpiar(){
            setArray([]);
            setNombre("");
            setCorreo("");
        }

        let listaElementos = array.map((elementoDeArray,index)=><li key={index}>{elementoDeArray}</li>)

    return(
        <>
            <form onSubmit={submit}>
                Nombre<input value={nombre} type="text" onChange={e=>setNombre(e.target.value)} />
                <br></br>
                Correo<input value={correo} type="text" onChange={e=>setCorreo(e.target.value)}/>
                <br />
                <input type="submit" value="Enviar"  />
                <ul>
                    {listaElementos}
                </ul>
            </form>
            <button onClick={limpiar}>Limpiar</button>

        </>
    )
}
export default Ejercicio6r2