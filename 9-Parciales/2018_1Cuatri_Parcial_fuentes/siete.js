function mostrar()
{
    var nota;
    var sexo;
    var acumuladorNotas=0;
    var promedio;
    var notaBaja;
    var sexoNotaBaja;
    var varonesAprobados=0;
    var contador =0
    
    while (contador<5) {
        contador++;
    
        do{
        nota=prompt("Ingrese la nota: ");
        nota=parseInt(nota);
        }while (isNaN(nota)|| nota<0 || nota>10);
    
        do{
            sexo=prompt("Ingrese el genero: ");
    
        }while (sexo != "f" && sexo!= "m");
    
        acumuladorNotas+= nota;
    
        if(contador==1){
   
            notaBaja=nota;
   
        }else {
   
        if(nota<notaBaja){
   
            notaBaja= nota;
   
            sexoNotaBaja=sexo;
   
        }
    }
   
    if (nota>=6 && sexo=="m")
   
     varonesAprobados++;

    }

    promedio= acumuladorNotas/contador;

    alert("Promedio de las notas: "+ promedio);
    alert("La nota mas baja es: "+ notaBaja+ " y es pertenece al sexo: "+ sexoNotaBaja);
    alert("La cantidad de notas masculinas mas altas es: "+ varonesAprobados);
}
