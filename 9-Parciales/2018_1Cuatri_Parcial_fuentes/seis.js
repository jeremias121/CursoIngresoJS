function mostrar()
{
var hora= document.getElementById("laHora").value;

switch(hora){
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
        alert("Es de mañana");
        break;

    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
        alert("Es de Tarde");
        break;
    
    case "20":
    case "21":
    case "22":
    case "23":
    case "24":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        if(hora<24 || hora >19){
            alert("Es de noche y es hora de dormir");
        }else{
            alert("Es de noche")
        }
        break;
default:
    alert("Hora inexistente, porfavor ingrese una hora entre 0 y 24");
}
    
}
