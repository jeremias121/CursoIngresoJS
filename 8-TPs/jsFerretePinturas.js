/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura;
var conversion;

function FahrenheitCentigrados () 
{
    temperatura=parseInt(document.getElementById("Temperatura").value);
    conversion=(temperatura*(9/5)+32);

    alert(temperatura + "°C son: " + conversion + "°F");
}

function CentigradosFahrenheit () 
{
    temperatura=parseInt(document.getElementById("Temperatura").value);
    conversion=((temperatura-32)*(5/9));

    alert(temperatura + "°F son: " + conversion + "°C");
}
