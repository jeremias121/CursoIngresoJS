function mostrar()
{
var letra;
var numero;
var respuesta;
var contadorPares=0;
var contadorImpares=0;
var contadorCeros=0;
var contadorPositivos=0;
var acumuladorPositivo=0;
var acumuladorNegativo=0;
var primeraVez= true;
var min;
var max;
var maxLetra;
var minLetra;

respuesta=confirm("Desea continuar?");

while(respuesta){
    do{
    
        numero=prompt("Ingrese un numero: ");
        numero=parseInt(numero);
    }while (isNaN(numero)|| numero<-100 || numero>100);
    
    do{
        letra=prompt("Ingrese una letra: ")
    }while(!isNaN(letra));


    if(numero%2==0){
        contadorPares++;        
        
    }else if(numero==0){
        
        contadorCeros++;
    
    }else{

        contadorImpares++;
    }
    if (numero>0){
    
        acumuladorPositivo+=numero;
        contadorPositivos++;

    }else if(numero<0){
    
        acumuladorNegativo+=numero;
    
    } 

    if(primeraVez){
        primeraVez= false;
        min=numero;
        max=numero;
        minLetra= letra;
        maxLetra=letra;

    }else{
        if(numero>max){
            max= numero;
            maxLetra= letra;
        }
        if(numero<min){
            min=numero;
            minLetra=letra;
        }
    }

    respuesta=confirm("Desea Continuar?");

}

document.write("Cantidad de Numeros Pares:"+ contadorPares+" <br>");
document.write("Cantidad de Numeros Impares: "+contadorImpares+"<br>");
document.write("Cantidad de Ceros: "+contadorCeros+"<br>");
    if(contadorPositivos>0){
    
        document.write("Promedio de Numeros Positivos: "+ acumuladorPositivo/contadorPositivos+"<br>");
    }
document.write("La suma de los Numeros Negativos es: "+ acumuladorNegativo+"<br>");    
document.write("El Numero Maximo es: "+max+" y su letra es: "+maxLetra+"<br>");
document.write("El Numero Minimo es: "+min+" y su letra es: "+minLetra);
  
}