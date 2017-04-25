///crear variables
var contenedorDz = document.getElementById('contenedorDz');

//crear elementos
var div = document.createElement('div');
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');
var contenedorImagenes = document.createElement('section');
//asignar estilos a div
div.style.border = "1px solid red";
div.style.height = "200px";
div.style.width = "1000px";
div.style.position = "absolute";
div.style.marginLeft = "200px";
div.style.marginTop = "300px";
// asignar estilos a h2
h2.className = "h2Dz";
h2.innerText = "Designed for everyone,everywhere.";

//asignar estilos a h3
h3.className = "h3Dz";
h3.innerText = "Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.";
//estilos a section
contenedorImagenes.style.width = "1000px";
contenedorImagenes.style.height = "300px";
contenedorImagenes.style.border = "1px solid purple";
contenedorImagenes.style.position = "absolute";
contenedorImagenes.style.marginTop = "300px";

//crear div para las imagenes 
var cuadrosImagenes = function(ancho,alto,posicion) {
	var cuadro = document.createElement('div');
	cuadro.className = "cuadroImg";
	cuadro.style.marginTop = "50px";
	cuadro.style.display = "inline-block";
	cuadro.style.border = "1px solid red";
	cuadro.style.width = "300px";
	cuadro.style.marginLeft = "25px";
	cuadro.style.height = "200px";
	contenedorImagenes.appendChild(cuadro);
}
for(var i=0; i<3; i++){
	cuadrosImagenes();
}


//agregar al html
contenedorDz.appendChild(div);
div.appendChild(contenedorImagenes);
div.appendChild(h2);
div.appendChild(h3);
