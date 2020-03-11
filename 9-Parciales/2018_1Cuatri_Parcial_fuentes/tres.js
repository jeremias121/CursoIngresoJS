function mostrar()
{
var precio;
var porcentaje;
var preciototal;

precio=parseInt(prompt("Ingrese el precio del producto"));
porcentaje=parseInt(prompt("Ingrese el porcentaje del descuento"));
preciototal=precio- ((precio*porcentaje)/100);

document.getElementById("elPrecioFinal").value= preciototal;

}//punto
var ancho;
var largo;
var perimetro;

ancho=parseInt(prompt("ingrese el ancho del rectangulo"));
largo=parseInt(prompt("ingrese el largo del rectangulo"));
perimetro=2*ancho+2*largo;

    alert("El perimetro del rectangulo es: "+ perimetro);
//punto dos
    var nombre;
    var localidad;
  
    nombre= document.getElementById("elNombre").value;
    localidad= document.getElementById("laLocalidad").value;
  
    alert("Usted es: "+ nombre + ", y vive en la localidad de: "+ localidad);