function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
    case"Febrero":
        alert("Este mes tiene menos de 29 dias");
    break;
    
    default:
        alert("Este mes tiene 30 dias o mas");
    break;
}
	


}//FIN DE LA FUNCIÓN