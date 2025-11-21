function obtengoposicion(posicion){

    console.log(posicion.coords.latitude, posicion.coords.longitude);
    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 19);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map); // para el puntero del marcador

    // para poner un circulo rojo
    var circle = L.circle([posicion.coords.latitude, posicion.coords.longitude], {
    color: 'red',
    fillColor: 'rgba(255, 0, 221, 1)',
    fillOpacity: 0.5,
    radius: 20
    }).addTo(map);
}
if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoposicion); // los callback sin parentesis NUNCA
} else {
    console.log("No se soporta la geolocalizacion");
}


