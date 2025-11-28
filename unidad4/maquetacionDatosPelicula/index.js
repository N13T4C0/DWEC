let contadorPag = 1;
let contenedor;
let peticionCurso = false;
window.onload = () => {
  contenedor = document.getElementById("contenedor");
  contadorPag = 2;
  peticionCurso = false;
  // primera carga
  lanzaPeti("https://www.omdbapi.com/?s=star&apikey=a63cd6f3&page=1");

  // botón cargar más
  document.getElementById("cargar").addEventListener("click", () => {
    lanzaPeti("https://www.omdbapi.com/?s=star&apikey=9de3cf92&page=" + contadorPag);
    contadorPag++;
  });

  // botón filtrar
  let boton = document.getElementById("filtrar");
  boton.addEventListener("click", () => {
    contenedor.innerHTML = "";
    busqueda();
  });
};
function lanzaPeti(url) {
  if (!peticionCurso) {
    peticionCurso = true;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        maquetarPelis(data.Search);
        contadorPag++;
        peticionCurso = false;
      });
  }

}

// Función para maquetar películas
function maquetarPelis(peliArray) {
  for (let peliculas of peliArray) {
    let divCuadro = document.createElement("img");
    divCuadro.src = peliculas.Poster;
    divCuadro.onerror = () => divCuadro.src = "./homelo.webp";
    let titulo = document.createElement("p");
    titulo.textContent = peliculas.Title;

    // listener con el imdbId
    divCuadro.addEventListener("click", () => {
      detalle(peliculas.imdbID);
      detalleDiv(peliculas.imdbID, peliculas.Poster, peliculas.Title, peliculas.Type);
    });

    contenedor.appendChild(divCuadro);
    divCuadro.appendChild(titulo);
  }
}

// Función de búsqueda
function busqueda() {
  let busqueda = document.getElementById("busqueda");
  let valorInput = busqueda.value;
  // busqueda.addEventListener("key",(e)=>{
  //   console.log(e.target.valorInput);
  // })
  lanzaPeti("https://www.omdbapi.com/?s=" + valorInput + "&apikey=a63cd6f3&page=1");
}

// Función detalle
function detalle(id) {
  fetch("https://www.omdbapi.com/?i=" + id + "&apikey=a63cd6f3")
    .then(response => response.json())
    .then(data => {
      console.log("click en " + id);
      console.log(data); // info de la peli que hemos clickado
    });
}
function detalleDiv(id, imagen, tituloPeli, tipo) {
  let divDetalle = document.createElement("div");
  divDetalle.style.backgroundColor = "white";
  divDetalle.style.width = 200 + "px";
  divDetalle.style.height = 200 + "px";
  titulo = document.createElement("p");
  imag = document.createElement("div");
  imag.innerHTML = "<img src=" + imagen + " width=" + 400 + "px height=" + 500 + "px />";
  titulo.innerHTML = tituloPeli + "<br> Tipo: " + tipo;

  contenedor.appendChild(divDetalle);
  divDetalle.appendChild(titulo);
  divDetalle.appendChild(imag);
  // por ahora solo me sale el titulo arreglar imagen
}
// scroll infinito
window.onscroll = () => {

  let finalCerca = (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400)
  if (finalCerca) {
    lanzaPeti("https://www.omdbapi.com/?s=star&apikey=9de3cf92&page=" + contadorPag);
    console.log("llega al final");
  }
}
// para el tipo serie o peliculas
function tipoBusqueda(){
  let tipoPelicula = document.getElementById("pelicula")
}