// PARTE 1
function recopilar(){
  var texto="";
  var parrafos = document.getElementsByTagName("p");
  console.log(parrafos);
  for(var i=0;i<parrafos.length;i++){
    texto+=parrafos.item(i).innerText+", ";
  };
  texto=texto.slice(0, -2)+".";//cambia la última coma por punto
  alert(texto);
}

// PARTE 2
function nuevoParrafo(){
		var nuevotexto = document.createElement("p");
		nuevotexto.innerHTML = "5 - Cuanto más sudes entrenando, menos sangrarás luchando";
		document.body.appendChild(nuevotexto);
	}
