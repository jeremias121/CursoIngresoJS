/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
        //Obtengo los valores por id
        nombre=document.getElementById("elNombre").value;
        edad=document.getElementById("laEdad").value;
        
            /*Genero una alerta donde agrupe
            dos variables y dos string por medio del + */
            alert("Nombre: "+ nombre + " Edad: "+ edad);
}

