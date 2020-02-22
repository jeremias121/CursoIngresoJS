function mostrar()
{
var precio;
var porcentaje;
var preciototal;

precio=parseInt(prompt("Ingrese el precio del producto"));
porcentaje=parseInt(prompt("Ingrese el porcentaje del descuento"));
preciototal=precio- ((precio*porcentaje)/100);

document.getElementById("elPrecioFinal").value= preciototal;

}
