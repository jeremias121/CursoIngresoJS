function mostrar()
{
var pregunta;
var nombre;
var edad;
var sexo;
var estadoCivil;
var primeravezHombre=true;
var primeravezMujer=true;
var nombreCasadoMasJoven;
var edadCasadoMasJoven;
var cantidadHombresSolteros=0;
var cantidadMujeres=0;
var acumuladorEdadMujeres=0;
var edadMasGrandeMujer;
var nombreMasGradeMujer;

pregunta=confirm("¿Deseas Comenzar?");

while (pregunta) {
  

  do{
  
      nombre=prompt("Ingrese el mombre:");
  
  }while (!isNaN(nombre)) {
      
  }do{

      edad=parseInt(prompt("Ingrece la edad:"));

  }while (isNaN(edad)) {

  }do{

      sexo=(prompt("Ingrece el sexo si es m o f: "));
  
  }while (!isNaN(sexo)|| sexo!="m" &&  sexo!="f") {
      
  }do{

      estadoCivil= prompt("Ingrese el estado civil: ");

  }while (!isNaN(estadoCivil) || estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="novio") {
    
  }
  if (sexo=="m"&& primeravezHombre && estadoCivil=="casado"){
      
    primeravezHombre=false;    
    nombreCasadoMasJoven= nombre;
    edadCasadoMasJoven=edad;
  }else{
    if(sexo=="m"&&edad<edadCasadoMasJoven && estadoCivil=="casado"){
      nombreCasadoMasJoven=nombre;
      edadCasadoMasJoven=edad;
    }
  }
  if(sexo=="f"){

    cantidadMujeres++;
    acumuladorEdadMujeres+=edad;
  }

  if (sexo=="m"&& estadoCivil=="soltero") {
    
    cantidadHombresSolteros++;
  }
  if(sexo="f" && primeravezMujer){

    primeravezMujer=false;
    nombreMasGradeMujer=nombre;
    edadMasGrandeMujer=edad;
  }else{
    if(sexo="f"&& edad>edadMasGrandeMujer){
      nombreMasGradeMujer=nombre;
      edadMasGrandeMujer=edad;
    }
  }
pregunta=confirm("¿Deseas continuar?");  
}

document.write("El hombre casado mas joven es: "+ nombreCasadoMasJoven+" y tiene: "+edadCasadoMasJoven+"<br>");
document.write("el promedio de la edad de las mujeres es: "+acumuladorEdadMujeres/cantidadMujeres+"<br>");
document.write("La cantidad de hombres solteros es: "+ cantidadHombresSolteros+"<br>");
document.write("La Mujer de mayor edad es: "+ nombreMasGradeMujer+" y su edad es: "+edadMasGrandeMujer+"<br>");

}