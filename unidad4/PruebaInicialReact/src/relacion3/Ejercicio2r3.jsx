import "./ejec2.css";
function Ejercicio2r3({nombre,edad,isOnline,imagen}){
    
    return(
        <>
            <div className="tarjeta">
                <img src={imagen} style={{filter: isOnline?"":"grayscale(100%)"}}/>
                <p>Nombre: {nombre}</p>
                <p>Edad: {edad}</p>
                <div style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: isOnline ? "green" : "red",
                    
                }}></div>
                {/* {isOnline?(<div style={{
                    borderRadius: "50%",
                    backgroundColor: "green",
                    width: "40px",
                    height: "40px"
                }}></div>):(
                    <div style={{
                        borderRadius: "50%",
                        backgroundColor: "red",
                        width: "40px",
                        height: "40px" 
                    }}></div>
                )} */}
            </div>
        </>
    )

}
export default Ejercicio2r3