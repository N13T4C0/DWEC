// Información del navegador
document.getElementById("navegador").innerHTML = 
    "<strong>User Agent:</strong> " + navigator.userAgent + "<br>" +
    "<strong>Idioma:</strong> " + navigator.language + "<br>" +
    "<strong>Plataforma:</strong> " + navigator.platform + "<br>" +
    "<strong>Resolución de pantalla:</strong> " + screen.width + " x " + screen.height;

// URL actual
document.getElementById("url").textContent = window.location.href;

// Botón para redirigir
function redirigir() {
    window.location.href = "https://developer.mozilla.org/";
}

// Información del objeto Screen
document.getElementById("screen").innerHTML =
    "<strong>Resolución total:</strong> " + screen.width + " x " + screen.height + "<br>" +
    "<strong>Área disponible:</strong> " + screen.availWidth + " x " + screen.availHeight + "<br>";
