///crear variables
var contenedorDz = document.getElementById('contenedorDz');

//crear elementos
var div = document.createElement('div');
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');
//asignar estilos a div
div.style.border = "1px solid red";
div.style.height = "200px";
div.style.width = "1000px";
div.style.position = "absolute";
div.style.marginLeft = "200px";
div.style.marginTop = "300px";
// div.style.border = "1px solid red";
// div.style.height = "500px";
// div.style.width = "500px";
// asignar estilos a h2
h2.className = "h2Dz";
h2.innerText = "Designed for everyone,everywhere.";
// h2.style.textAlign = "center";
// h2.style.fontSize = "40px";
// h2.style.fontFamily = "arial,verdana";
//asignar estilos a h3
h3.className = "h3Dz";
h3.innerText = "Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.";
// h3.style.textAlign = "center";
// h3.style.fontSize = "20px";
// h3.style.fontFamily = "arial,verdana";
//crear div para las imagenes
// var cuadrosImagenes = function(ancho,alto,posicion) {

// }


//agregar al html
contenedorDz.appendChild(div);
div.appendChild(h2);
div.appendChild(h3);
