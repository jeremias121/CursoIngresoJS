/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
var numerouno;
var numerodos;
var operador;
var operdaorrandom;

    numerouno= Math.floor(Math.random()*(11-1))+1;
    numerodos= Math.floor(Math.random()*(11-1))+1;
    operdaorrandom= Math.floor(Math.random()*(5-1))+1;

    switch(operdaorrandom){
        case "1":
        operador: "+"
        break;
        case "2":
        operador: "-"
        break;
        case "3":
        operador: "*"
        break;
        case "4":
        operador: "/"
        break;
        default:
        break;
    }
    document.getElementById("PrimerNumero").value=numerouno;
    document.getElementById("Operador").value=operador;
    document.getElementById("SegundoNumero").value=nuemrodos;

}//FIN DE LA FUNCIÓN
function Responder()
{
    var resultadofinal;
    respuesta=document.getElementById("Respuesta").value;
    respuesta=parseInt(respuesta);
    

}//FIN DE LA FUNCIÓN
