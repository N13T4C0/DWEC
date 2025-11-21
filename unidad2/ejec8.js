  // Solo UNA VEZ:
  map = L.map('map').setView([0, 0], 19);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; ...'
    }).addTo(map);

  // Creamos los elementos solo una vez
  var circle = L.circle([0, 0], {
    color: 'red',
    fillColor: 'rgba(255, 0, 221, 1)',
    fillOpacity: 0.5,
    radius: 20
  }).addTo(map);

  // Luego solo los movemos:
  function obtengoposicion(posicion) {
    const lat = posicion.coords.latitude;
    const lon = posicion.coords.longitude;
    map.setView([lat, lon], 19);
    marker.setLatLng([lat, lon]);
    circle.setLatLng([lat, lon]);
  }

  function mostrarUbicacion(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("coordenadas").innerHTML =
      "Latitud: " + lat + " | Longitud: " + lon;
      const accuracy = position.coords.accuracy; // en metros
    document.getElementById("precision").innerHTML = 
      "pre:" + accuracy + " metros";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(obtengoposicion);
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  } else {
    console.log("No se soporta la geolocalización");
  }
  /*
  tmb se peude
  function geo(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log("Las lon son: "+lat+lon);
        });
    }
}
  */
  // 3
  function error(pos){
    console.log("Lati")
  }
  // 4
  function mostrarUbicacionActual(position) {
    const latt = position.coords.latitude;
    const lonn = position.coords.longitude;
    document.getElementById("coor").innerHTML = 
      "Latitud: " + latt + "Longitud: " + lonn;
      console.log("Lat:"+latt+"Long"+lonn);
  }


  if (navigator.geolocation) {
    // el watchPosition actualiza continuamente la posición
    navigator.geolocation.watchPosition(mostrarUbicacionActual);
  } else {
    document.getElementById("coor").innerHTML = "Geolocalización no soportada.";
  }
  // 5s
  // 6
  function mostrarPrecision(position) {
    const accuracy = position.coords.accuracy; // en metros
    document.getElementById("precision").innerHTML = 
      "pre:" + accuracy + " metros";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPrecision);
  } else {
    document.getElementById("precision").innerHTML = "Geolocalización no soportada.";
  }
  // 7
  // Coordenadas fijas: Plaza Mayor, Madrid

  /*
  function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Radio de la Tierra en metros
    const rad = Math.PI / 180;

    const dLat = (lat2 - lat1) * rad;
    const dLon = (lon2 - lon1) * rad;

    const a = Math.sin(dLat / 2) * 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad);

    const c = 2 *Math.asin(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  function mostrarDistancia(posicion) {
    const lat = posicion.coords.latitude;
    const lon = posicion.coords.longitude;
    const distancia = calcularDistancia(lat, lon, destinoLat, destinoLon);
    const texto = distancia < 1000? (distancia) + " m" : (distancia / 1000) + " km";

    document.getElementById("distancia").innerHTML =
      "Estás a " + texto + " de la Plaza Mayor.";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarDistancia);
  } else {
    document.getElementById("distancia").innerHTML =
      "Tu navegador no soporta geolocalización.";
  }
  function distancia(posicion1){
    // el de la distancia
  const destinoLat = 40.4168;
    const destinoLon = -3.7038;
    document.getElementById("distancia").innerHTML=
      "La distancia es de: "+map.distance(posicion1.coords.latitude,posicion1.coords.longitude,destinoLat,destinoLon);
  }
      */
  // 8
  let puntos = [];
  var polyline = L.polyline(puntos, {color: 'red'}).addTo(map);
  var marker = L.marker([0,0]).addTo(map); 
  var puntoFijo = [36.65681371737724, 4.478759769312809];
  
  function linea(posicion){
    const lat = posicion.coords.latitude;
    const lng = posicion.coords.longitude;
    puntos.push([lat, lng]);
    if(puntos.length==1){
    polyline = L.polyline(puntos).addTo(map);
    
    marker = L.marker(puntos).addTo(map);
    } else{
        polyline.setLatLngs(puntos);
    marker.setLatLng([lat, lng]); 
    map.setView([lat, lng], 15);
    console.log("La distancia es de:"+map.distance(puntoFijo))
    }
  } 
  navigator.geolocation.watchPosition(linea);
