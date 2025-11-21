
function Ejercicio3(){
    function pulsoBoton(e){
        alert("Has pulsado en el "+e.target.textContent);
    }

    return(
        <>
        <button  onClick={pulsoBoton}>Boton 1 </button>
        <button  onClick={pulsoBoton}>Boton 2 </button>
        <button  onClick={pulsoBoton}>Boton 3 </button>
        {/* De ptra forma`p */}
        <button onClick={e=>alert("Has pulsado en: "+e.target.textContent)}>Boton 4</button>
        </>
    ) 
}
export default Ejercicio3