function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch(laHora)
{
    case"7":
        alert("Es de mañana");
    break;

    case"8":
        alert("Es de mañana");
    break;
    
    case"9":
        alert("Es de mañana");
    break;

    case"10":
        alert("Es de mañana");
    break;

    case"11":
        alert("Es de mañana");
    break;

    case"12":
        alert("Es de tarde");
    break;

    case"13":
        alert("Es de tarde");
    break;
    
    case"14":
        alert("Es de tarde");
    break;

    case"15":
        alert("Es de tarde");
    break;

    case"16":
        alert("Es de tarde");
    break;
    
    case"17":
        alert("Es de tarde");
    break;
    
    case"18":
        alert("Es de tarde");
    break;
    
    case"19":
        alert("Es de tarde");
    break;

    case"20":
    case"21":
    case"22":
    case"23":
    case"24":
    case"0":
    case"1":
    case"2":
    case"3":
    case"4":
    case"5":
    case"6":
        alert("Es de noche");
    break;
    
    default:
        alert("No es una hora del dia")
    

}

}//FIN DE LA FUNCIÓN