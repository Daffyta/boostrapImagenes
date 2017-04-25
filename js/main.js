///crear variables
var contenedorDz = document.getElementById('contenedorDz');

//crear elementos
var div = document.createElement('div');
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');
//asignar estilos a div
// div.style.border = "1px solid red";
// div.style.height = "500px";
// div.style.width = "500px";
// asignar estilos a h2
h2.className = "h2Dz";
h2.innerText = "Designed for everyone,everywhere.";


//agregar al html
contenedorDz.appendChild(div);
div.appendChild(h2);
