/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numero;
    var resultado;

        numero=parseInt(document.getElementById("sueldo").value);
        resultado = numero + numero*0.1;
        document.getElementById("resultado").value = porsentaje;
        
}
