function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero = prompt("ingrese numero");	
	
	while(isNaN(numero) || contador<5){
		contador+=1;
	//validamos
		numero=parseInt(prompt("Ingrese otro numero"));
	//acumulamos
		acumulador+= numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN