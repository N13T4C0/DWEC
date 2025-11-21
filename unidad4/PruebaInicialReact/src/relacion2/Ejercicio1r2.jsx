import { useState } from "react"

function Ejercicio1r2(e){
    const [numero,setNumero]=useState(0);

    return(
        <>
            <p>Numero: {numero} </p>
            <button onClick={e=>setNumero(numero+1)}>Incrementar</button>
            <button onClick={e=>({numero}<0)?setNumero(0):setNumero(numero-1)}>Decrementar</button>
            <button onClick={e=>setNumero(0)}>Resetear</button>
            <button onClick={e=>setNumero(numero*2)}>Multiplicar</button>
        </>
    )

}
export default Ejercicio1r2