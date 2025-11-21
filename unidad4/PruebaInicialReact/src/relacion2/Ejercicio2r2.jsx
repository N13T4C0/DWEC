import { useState } from "react"

function Ejercicio2r2(){
    const [isVisible,setIsVisible]=useState(false);
    const visible = ()=>{
        setIsVisible(!isVisible)
    }

    return(
        <>
            <button onClick={visible}>
                
            {isVisible?"Ocultar":"Mostrar"}</button>

            {isVisible && (
            <div>
                <p>Lorem fistrum no te digo trigo por no llamarte Rodrigor apetecan va usté muy cargadoo tiene musho peligro a wan diodeno a peich ese hombree. Ese hombree jarl llevame al sircoo se calle ustée mamaar por la gloria de mi madre diodeno. Amatomaa tiene musho peligro ese que llega al ataquerl diodenoo. Condemor qué dise usteer te va a hasé pupitaa amatomaa caballo blanco caballo negroorl a wan torpedo al ataquerl. Torpedo no te digo trigo por no llamarte Rodrigor ese pedazo de tiene musho peligro amatomaa jarl hasta luego Lucas pecador qué dise usteer tiene musho peligro. Mamaar de la pradera ese pedazo de sexuarl caballo blanco caballo negroorl ese hombree está la cosa muy malar qué dise usteer ese hombree. Me cago en tus muelas benemeritaar se calle ustée jarl torpedo se calle ustée condemor. Tiene musho peligro al ataquerl no te digo trigo por no llamarte Rodrigor tiene musho peligro pecador ese pedazo de ahorarr a wan condemor. Jarl por la gloria de mi madre a peich va usté muy cargadoo ese que llega al ataquerl al ataquerl por la gloria de mi madre a peich condemor por la gloria de mi madre. .</p>
            </div>
            )}
            {!isVisible && (
                <>
                    <p>Este texzto esta oculto</p>
                </>
            )}
        </>
    )
}
export default Ejercicio2r2