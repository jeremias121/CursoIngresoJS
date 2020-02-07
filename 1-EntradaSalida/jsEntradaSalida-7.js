/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

var valor1;
var valor2;
var resultado;
/*si la variable esta fuera de la funcion se 
denominan variables globales y abarcan todas las funciones*/

function sumar()
{	
     valor1=parseInt(document.getElementById("numeroUno").value);
     valor2=parseInt(document.getElementById("numeroDos").value);
     resultado=valor1 + valor2;

         alert("el resultado es: "+ resultado);	
}

function restar()
{


     valor1=parseInt(document.getElementById("numeroUno").value);
     valor2=parseInt(document.getElementById("numeroDos").value);
     resultado=valor1 - valor2;

        alert("el resultado es: "+ resultado);	
}

function multiplicar()
{ 


     valor1=parseInt(document.getElementById("numeroUno").value);
     valor2=parseInt(document.getElementById("numeroDos").value);
     resultado=valor1 * valor2;

        alert("el resultado es: "+ resultado);
}

function dividir()
{


     valor1=parseInt(document.getElementById("numeroUno").value);
     valor2=parseInt(document.getElementById("numeroDos").value);
     resultado=valor1 / valor2;

        alert("el resultado es: "+ resultado);
}

