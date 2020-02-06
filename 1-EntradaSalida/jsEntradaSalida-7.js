/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var valor1 
    var valor2
    var resultado

        valor1=parseInt(document.getElementById("numeroUno").value);
        valor2=parseInt(document.getElementById("numeroDos").value);
        resultado=valor1 + valor2;

            alert("el resultado es: "+ resultado);	
}

function restar()
{
    var valor1 
    var valor2
    var resultado

        valor1=parseInt(document.getElementById("numeroUno").value);
        valor2=parseInt(document.getElementById("numeroDos").value);
        resultado=valor1 - valor2;

            alert("el resultado es: "+ resultado);	
}

function multiplicar()
{ 
    var valor1 
    var valor2
    var resultado

        valor1=parseInt(document.getElementById("numeroUno").value);
        valor2=parseInt(document.getElementById("numeroDos").value);
        resultado=valor1 * valor2;

            alert("el resultado es: "+ resultado);
}

function dividir()
{
    var valor1 
    var valor2
    var resultado

        valor1=parseInt(document.getElementById("numeroUno").value);
        valor2=parseInt(document.getElementById("numeroDos").value);
        resultado=valor1 / valor2;

            alert("el resultado es: "+ resultado);
}

