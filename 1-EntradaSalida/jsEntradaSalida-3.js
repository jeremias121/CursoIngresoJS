/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;

        /*.value significa que guardas un valor
        y.innerHTML te cambia o modifica la pagina*/ 
        nombre = document.getElementById("elNombre").value;

            alert(nombre);
}


