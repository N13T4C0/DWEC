import Producto from "./Producto";
function ListaProductos({productos}){
    return(
        <ul>
        {productos.map(e=>(
            <Producto 
            key={e.id}
            nombre={e.nombre}
            precio={e.precio}></Producto>
        ))}  
        </ul>
    );

}
export default ListaProductos