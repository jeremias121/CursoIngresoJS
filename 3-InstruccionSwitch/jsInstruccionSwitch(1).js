function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case"Enero":
        alert("Que comiences bien el año");
    break;

    case"Marzo":
        alert("Comienzan las clases");
    break;

    case"Julio":
        alert("Llegan las vacaciones de invierno");
    break;

    case"Diciembre":
        alert("Felices Fiestas")
    break;
default:
        alert("No hay ningun envento importante");
    break;
}



}//FIN DE LA FUNCIÓN