function mostrar()
{

    var contador=0;
    var material;
    var precioMaterial;
    var unidades;
    var marca;
    var fabricante;
    var barbijoMasCaro;
    var fabricanteMasCaro;
    var unidadMasCaras;
    var unidadMayorDeJabon=0;
    var cantidadMayorDeUnidades;
    var fabricanteConMayorUnidades;
    var materialConMayorUnidades;
    
    
    while (contador<5) {
        contador++;
    
        do{
        
            material=prompt("Ingrese el material si es barbijo, jabón o alcohol");
        
        }while (!isNaN(material)|| material!="barbijo"&& material!="jabón"&& material!="alcohol") {
            
        }do{
    
            precioMaterial=parseInt(prompt("Ingrece el precio del material"));
    
        }while (isNaN(precioMaterial)|| precioMaterial<100|| precioMaterial>300) {
    
        }do{
    
            unidades=parseInt(prompt("Ingrece la cantidad de unidades que pueden ser de 1 a 1000"));
        
        }while (isNaN(unidades)|| unidades<1||unidades>1000) {
            
        }do{
    
            marca=prompt("Ingrese la marca del material");
       
        }while (!isNaN(marca)) {
            
        }do{
    
            fabricante= prompt("Ingrese el fabricante del material");
    
        }while (!isNaN(fabricante)) {
            
        }
        if(contador==1&& material=="barbijo"){
            barbijoMasCaro=precioMaterial;
            fabricanteMasCaro=fabricante;
            unidadMasCaras=unidades;
    
        }else{
            if(precioMaterial>barbijoMasCaro){
                
                barbijoMasCaro=precioMaterial;
                fabricanteMasCaro=fabricante;
                unidadMasCaras=unidades;
            }
        }
        if (material=="jabón") {
            
            unidadMayorDeJabon+=unidades;
    
        }
        if (contador ==1 ) {
            cantidadMayorDeUnidades=unidades;
            fabricanteConMayorUnidades=fabricante;
            materialConMayorUnidades=material;
        }else{
            if(cantidadMayorDeUnidades<unidades){
                cantidadMayorDeUnidades=unidades;
                fabricanteConMayorUnidades=fabricante;
                materialConMayorUnidades=material;
            }
        }
    }
    alert("El precio del barbijo mas caro es: "+ barbijoMasCaro+" ,la cantidad de unidades son: "+ unidadMasCaras+" y su fabricante es: "+ fabricanteMasCaro);
    alert("El material con mas unidades es: "+materialConMayorUnidades+" y su fabricante es: "+fabricanteConMayorUnidades+" , y la cantidad de unidades es: "+cantidadMayorDeUnidades);
    alert("la cantidad total de unidades de jabón son: "+ unidadMayorDeJabon);
}
    
    
