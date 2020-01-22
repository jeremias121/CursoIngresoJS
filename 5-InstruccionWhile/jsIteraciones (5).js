function mostrar()
{

var sexo = prompt("ingrese f ó m .");
var contador=0;
while(sexo.toLocaleLowerCase()!="f" && sexo.toLocaleLowerCase()!= "m"||contador== 3){
    contador++;
    sexo= prompt("Error! Ingrese si es f ò m.");
}
if(contador == 3){
    alert("Intentos maximos alcanzados");
}else{
document.getElementById('Sexo').value=sexo;
}
}//FIN DE LA FUNCIÓN