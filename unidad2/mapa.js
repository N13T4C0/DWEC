// Inicializa el mapa centrado en coordenadas neutras
const map = L.map('map').setView([0, 0], 15);

// Añade capa base de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Inicializa marcador y polilínea
const puntos = [];
const polyline = L.polyline(puntos, { color: 'red' }).addTo(map);
const marker = L.marker([0, 0]).addTo(map);

// Función que actualiza la posición del usuario
function actualizarPosicion(posicion) {
  const lat = posicion.coords.latitude;
  const lng = posicion.coords.longitude;

  const nuevaPosicion = [lat, lng];
  puntos.push(nuevaPosicion);

  polyline.setLatLngs(puntos);     // Actualiza la línea
  marker.setLatLng(nuevaPosicion); // Mueve el marcador
  map.setView(nuevaPosicion, 15);  // Centra el mapa
}

// Inicia el seguimiento 
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(actualizarPosicion);
} else {
  alert('Tu navegador no soporta geolocalización.');
}



