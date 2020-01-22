function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var iterador;
	var numero;

	iterador=prompt("Cuantas veses quieres intetnar?")
	numero = prompt("ingrese numero");

	while(isNaN(numero)||contador<iterador && respuesta == "si"){
		contador+=1;
		numero=parseInt(prompt("Ingrese otro numero"));
		acumulador+= numero;
		respuesta=prompt("Deseas continuar?");
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN