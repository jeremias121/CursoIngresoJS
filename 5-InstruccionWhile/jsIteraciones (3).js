function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador=0;
while(clave.toLowerCase() != "utn750"){
    contador++;
    if(contador==3){
        break;
    }

    clave= prompt("Error! ingrese el número clave.");

}
if (contador==3){
    alert("Intentos maximos alcanzados");

}else{
    alert("bienvenindo");
}
}//FIN DE LA FUNCIÓN
