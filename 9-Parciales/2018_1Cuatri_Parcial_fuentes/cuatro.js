function mostrar()
{
var numerouno;
var numerodos;
var numerounoParseado;
var numerodosParseado;
var resultado;

numerouno=prompt("Ingrese un numero");
numerodos=prompt("Ingrese otro numero");

numerodosParseado = parseInt(numerodos);
numerounoParseado = parseInt(numerouno);

if(numerouno==numerodos){
    resultado=numerodos+numerouno;
}else if(numerouno>numerodos){
    resultado=numerounoParseado-numerodosParseado;
}else{
    resultado=numerounoParseado+numerodosParseado;
    if(resultado>10){
        alert("El resultado es: "+ resultado+ " y supero los 10");
    }
}
    alert("El resultado es: "+ resultado);
}

