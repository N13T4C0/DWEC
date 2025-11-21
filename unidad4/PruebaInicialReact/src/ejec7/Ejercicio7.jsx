import "./ejec7.css"
import { useState } from 'react';

function Ejercicio7(){
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");

    function pulsoBoton(){
        alert("Hello: "+name+" "+lastName+"!!");
        setLastName("");
        setName("");
    }
    return(
        <>
            <input type="text" placeholder="First Name" value={name} onChange={e=>setName(e.target.value)}/>
            <br></br>
            <input type="text" placeholder="Last Name" value={lastName} onChange={e=>setLastName(e.target.value)}/>
            <br></br>
            <input type="submit" value="GREET ME" onClick={pulsoBoton}/>
        </>
    )    

}
export default Ejercicio7