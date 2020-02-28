function mostrar()
{
var respuesta;
var peso;
var marca;
var temperatura;

var temperaturaPares=0;
var temperaturaNegativa=0;
var primeraVez=true;
var pesoMaximo;
var pesoMinimo;
var marcaMasPesada;
var contadorPesos=0;
var acumuladorPeso=0;


    respuesta=confirm("Desea continuar?");
    
    while(respuesta){
        
        do{
            marca=prompt("Ingrese una letra: ")
        }while(!isNaN(marca));

        do{
        
            peso=prompt("Ingrese un numero: ");
            peso=parseInt(peso);
        }while (isNaN(peso)|| peso<1 || peso>100);
        
        do{
            temperatura=prompt("Ingrese un numero: ");
            temperatura=parseInt(temperatura);
        }while (isNaN(temperatura)|| temperatura<-30 || temperatura>30);
        
        if(temperatura%2==0){
            temperaturaPares++;        
        }

        if(temperatura<0){
            temperaturaNegativa++;;
        }

        if(primeraVez){
            primeraVez= false;
            pesoMinimo=peso;
            pesoMaximo=peso;
            marcaMasPesada=marca;

        }else{
            if(peso>pesoMaximo){
                pesoMaximo= peso;
                marcaMasPesada=marca;
            }
            if(peso<pesoMinimo){
                pesoMinimo=peso;
            }
        }
        
        acumuladorPeso+=peso;
        contadorPesos++;

        respuesta=confirm("Desea Continuar?")
    }

    document.write("Temperaturas Pares:"+ temperaturaPares+" <br>");
    document.write("La Marca con el producto mas pesada es: "+marcaMasPesada+"<br>");
        if(contadorPesos>0){
        
            document.write("Promedio de todos los pesos de los productos: "+ acumuladorPeso/contadorPesos+"<br>");
        }
    document.write("Los Cantidad de productos que se concervan a menos de 0º son: "+ temperaturaNegativa+"<br>");    
    document.write("El Peso Maximo es: "+pesoMaximo+" y el Peso Minimo es: "+pesoMinimo+"<br>");
    
      
} 