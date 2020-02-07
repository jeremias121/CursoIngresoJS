/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numero;
    var resultado;

        numero=parseInt(document.getElementById("importe").value);
        resultado= numero - numero*25/100;
        /*tambien se puede escribir:
        resultado= mumero - numero*0.25;
        resulttado= numero- numero*.25;*/

        document.getElementById("resultado").value = resultado;
}