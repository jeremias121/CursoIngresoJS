/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var valor1;
    var valor2;
    var resultado;

        valor1=parseInt(document.getElementById("numeroUno").value);
        valor2=parseInt(document.getElementById("numeroDos").value);
        resultado=valor1 + valor2;

            alert("la suma es: "+ resultado);

}

