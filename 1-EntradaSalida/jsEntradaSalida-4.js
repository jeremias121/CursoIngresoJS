/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

		nombre = prompt("Escriba su nombre");

			//Obtengo los valores por id
			document.getElementById("elNombre").value = nombre;
		
}

