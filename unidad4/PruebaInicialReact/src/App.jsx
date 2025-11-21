import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './Cabecera'
import Lista from './Lista'
import BotonLaura from './BotonLaura'
import Ejercicio3 from './Ejercicio3'
import Ejercicio4 from './Ejercicio4'
import Ejercicio5 from './Ejercicio5'
import Ejercicio7 from './ejec7/Ejercicio7'
import Ejercicio1r2 from './relacion2/Ejercicio1r2'
import Ejercicio2r2 from './relacion2/Ejercicio2r2'
import Ejercicio3r2 from './relacion2/Ejercicio3r2'
import Ejercicio4r2 from './relacion2/Ejercicio4r2'
import Ejercicio6r2 from './relacion2/Ejercicio6r2'
import Ejercicio1r3 from './relacion3/Ejercicio1r3'
import Ejercicio2r3 from './relacion3/Ejercicio2r3'
import ListaProductos from './relacion3/Listaproductos'
import ContadorPadre from './relacion3/ContadorPadre'
import Card from './relacion3/Card'
import ListaItem from './relacion3/ListaItem'
let productos=[
        {id: 12,nombre: "Mousepa",precio: 120 },
        {id: 10,nombre:"TV",precio: 4590}
    ];
function App() {

  return (
    <>

      <Cabecera></Cabecera>
      <Lista></Lista>
      <h2>Ejercicio 3</h2>
      <Ejercicio3></Ejercicio3>
      <h2>Ejercicio 4</h2>
      <Ejercicio4></Ejercicio4>
      <h2>Ejercicio 5</h2>
      <Ejercicio5></Ejercicio5>
      <h2>Ejercicio 7</h2>
      <Ejercicio7></Ejercicio7>
      <hr />
      <h2>Relacion 2s</h2>
      <Ejercicio1r2></Ejercicio1r2>
      <h2>Ejercicio 2</h2>
      <Ejercicio2r2></Ejercicio2r2>
      <h2>Ejercicio 3</h2>
      <Ejercicio3r2></Ejercicio3r2>
      <h2>Ejercicio 4</h2>
      <Ejercicio4r2></Ejercicio4r2>
      <h2>Ejercicio 6</h2>
      <Ejercicio6r2></Ejercicio6r2>
      <hr />
      <h2>Relacion 3</h2>
      <h2>Ejercicio 1</h2>
      <Ejercicio1r3 nombre={"Pepe"} emoji={"🥱"}></Ejercicio1r3>
      <h2>Ejercicio 2</h2>
      <Ejercicio2r3 isOnline={false} nombre={"Manolo"} edad={"240"} imagen="https://m.media-amazon.com/images/I/51IfkMZfgdL._UXNaN_FMjpg_QL85_.jpg"></Ejercicio2r3>
      <h2>Ejercicio 3</h2>
      <ListaProductos productos={productos}></ListaProductos>   
      <h2>Ejercicio 4</h2>
      <ContadorPadre></ContadorPadre>
      <h2>Ejercicio 5</h2>
      <Card title="Bienvenida">
        <p>Este es el contenido de la primera tarjeta.</p>
        <button>Click aquí</button>
      </Card>

      <Card title="Despedida">
        <img src="https://m.media-amazon.com/images/I/51IfkMZfgdL._UXNaN_FMjpg_QL85_.jpg" alt="adiós" />
      </Card>
      <hr />
      <h2>To do List</h2>
      <ListaItem></ListaItem>
    </>
  )
}

export default App
