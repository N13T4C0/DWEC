import { useState } from "react";

// Componente para cada item
function Item({ nombre,cantidad, onDelete, onNuevoTexto }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(nombre);

  function entraEdicion() {
    setModoEdicion(true);
  }

  function guardaCambios() {
    setModoEdicion(false);
    onNuevoTexto(nombreEditado);
  }

  if (!modoEdicion) {
    return (
      <li>
        {nombre}
        {cantidad}
        <button onClick={entraEdicion}>Editar</button>
        <button onClick={onDelete}>Borrar</button>
      </li>
    );
  } else {
    return (
      <li>
        <input
          value={nombreEditado}
          onChange={(e) => setNombreEditado(e.target.value)}
        />
        <button onClick={guardaCambios}>Guardar</button>
      </li>
    );
  }
}
export default Item