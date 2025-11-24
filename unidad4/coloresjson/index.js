datosAMaquetar={
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "rgba(223, 61, 32, 1)"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}

window.onload = ()=>{

    contenedor = document.getElementById("contenedor");
    for (let colores of datosAMaquetar.colors) {
    let divColor = document.createElement("div");
    divColor.style.backgroundColor = colores.code.hex;
    // let titulo = document.createElement("p");
    // titulo.innerHTML = colores.color;
    // let categoria = document.createElement("p");
    // categoria.innerHTML= colores.category;
    // let primar = document.createElement("p");
    // primar.innerHTML = colores.type;
    // // rgba
    // let rgba = document.createElement("p");
    // rgba.innerHTML = colores.code.rgba+"  "+colores.code.hex;
    // // categoria y tpo
    // divColor.appendChild(titulo);
    // divColor.appendChild(categoria);
    // divColor.appendChild(primar)
    // divColor.appendChild(rgba);

    // cn text content
    divColor.innerHTML = colores.color+"<br>" + colores.category+"<br>"+ colores.type +"<br>"+ colores.code.rgba+"<br>"+ colores.code.hex; 
    contenedor.appendChild(divColor);

  }
}

