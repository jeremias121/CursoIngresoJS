function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
while(numero<0 || numero>10 || isNaN(numero)){
numero= prompt("Error! Ingrese un numero entre 0 y 9.");

numero=parseInt(numero);
}
}//FIN DE LA FUNCIÓN