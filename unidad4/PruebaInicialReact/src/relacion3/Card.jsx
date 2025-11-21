function Card({tittle,children}){

    return(
        <>
            <div className="tarjeta">
                <h2>{tittle}</h2>
                {children}             
            </div>
        </>
    )
}
export default Card