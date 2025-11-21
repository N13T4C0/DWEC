import { useState } from "react"

function Ejercicio4(){
    const [contador, setContador] = useState(0);
    function contadorBoton(){
        setContador(contador+1);
    }
    return(
        <>

            <p>Has clickado: {contador}</p><button onClick={contadorBoton}>Click me</button>
        </>
    )
}
export default Ejercicio4