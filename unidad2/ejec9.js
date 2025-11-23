// Inicializa el mapa centrado en Íllora
const map = L.map('map').setView([37.1882, -3.6067], 15);

// Añade capa base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Define el  círculo
let centro = [37.194373454653565,-3.618398381477514]; // Centro del área el ayala he puesto
let radioMetros = 20;
let area = L.circle(centro, {
  radius: radioMetros,
  color: 'blue',
  fillColor: '#aaddff',
  fillOpacity: 0.3
}).addTo(map);

const puntos = [];
const polyline = L.polyline(puntos, { color: 'red' }).addTo(map);
const marker = L.marker([0, 0]).addTo(map);

// para saber si estoy dentro o no
let dentroDelArea = false;

// Función que actualiza la posición
function actualizarPosicion(posicion) {
  const lat = posicion.coords.latitude;
  const lng = posicion.coords.longitude;
  const nuevaPosicion = [lat, lng];

  puntos.push(nuevaPosicion);
  polyline.setLatLngs(puntos);
  marker.setLatLng(nuevaPosicion);
  map.setView(nuevaPosicion, 15);

  // Verifica si está dentro del círculo usando Leaflet
  if(!lat.includes[centro] && !lng.includes[centro]){
    
  }
}
// Inicia seguimiento
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(actualizarPosicion);
} else {
  console.log("Tu navegaodor no soporta la geo");
}