function mostrar()
{

	var contador=0;
	var acumulador=0;
	var iterador;
	var numero;

	iterador=prompt("Cuantas veses quieres intetnar?");
	numero=prompt("Ingrese un numero")

	while(isNaN(numero) && contador<iterador){
		contador+=1;
		numero=parseInt(prompt("Ingrese otro numero"));
		acumulador+= numero;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN