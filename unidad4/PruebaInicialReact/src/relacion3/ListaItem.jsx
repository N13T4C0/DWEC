import { useState } from "react";
import Item from "./Item"
function ListaItem() {
  let datosIniciales= {"items":[
    {
        "nombre":"arroz",
        "cantidad": 4
    },
    {
        "nombre": "pan",
        "cantidad":9
    },
    {
      "nombre":"webito",
      "cantidad":8
    }
]}
  const [items, setItems] = useState(datosIniciales.items);
  const [nuevoItem, setNuevoItem] = useState("");

  function agregarItem() {
    
    setItems([...items, {nombre: nuevoItem, cantidad: ""}]);
    setNuevoItem("");
  }
  // funcion para borrar item
  function borrarItem(index){
    const nuevosItems = [...items] // copia del array
    nuevosItems.splice(index,1);
    setItems(nuevosItems);
  }
 
  function actualizarItem(index, nuevoTexto) {
    
    items[index].nombre = nuevoTexto;
    setItems([...items]);
  }
  // mostrar datos iniciales
  // let maquetaListaCompra = datosIniciales.items.map((elementoDeArray,indice)=><Item key={indice}
  // nombre={elementoDeArray.nombre}></Item>)
  return (
    <>
      <h2>Mi To‑Do List</h2>
      <input
        value={nuevoItem}
        onChange={(e) => setNuevoItem(e.target.value)}
        placeholder="Nuevo item"
      />
      <button onClick={agregarItem}>Agregar</button>

      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            nombre={item.nombre}
            cantidad={item.cantidad}
            onDelete={() => borrarItem(index)}
            onNuevoTexto={(nuevoTexto) => actualizarItem(index, nuevoTexto)}
          />
        ))}
      </ul>
    </>
  );
}

export default ListaItem;