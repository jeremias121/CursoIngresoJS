/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1
var precio2
var precio3
var resultado

function Sumar () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);
    resultado= precio1+precio2+precio3;

        alert("El resultado es: " + resultado)
}
function Promedio () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);
    resultado= (precio1+precio2+precio3)/3;

        alert("El promedio es: " + resultado)
}
function PrecioFinal () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);
    resultado= precio1+precio2+precio3+(precio1+precio2+precio3)*0.21;

        alert("El Precio Final es: " + resultado)
}