import { useState } from "react";

// boton q solo pueda dar 3 veces
function BotonLaura(limite){
    let resultado;
    const [contador,setContador] = useState(0);
    function incrementaContador(){
        setContador(contador+1);
        console.log(contador);
    }
    if(contador>=limite){
        resultado=<button disabled>No puedes pulsarme</button>
    }else resultado= <button onClick={incrementaContador}>Pulsame</button>
    return resultado;

}
export default BotonLaura