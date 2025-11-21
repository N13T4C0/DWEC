function ListaPerso({elementos}){
    return(
        <div>
            {elementos.map((name,index)=>{
                return <p key={index}>{name}</p>
            })}
        </div>
    )
}
function Ejercicio5(){
    let array=['🐱‍🐉dog', '🦊cat', '👽chicken', '🐇cow', '🦂sheep', '🎠horse'];
    return(
        <>
            <h2>Lista de animales</h2>
            <ListaPerso elementos={array}/>
        </>
    )
}
export default Ejercicio5