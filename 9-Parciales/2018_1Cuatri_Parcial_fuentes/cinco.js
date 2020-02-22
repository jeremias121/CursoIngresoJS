function mostrar()
{
var planeta= prompt("Escribe un nombre de un planeta en minusculas");

switch(planeta){
    case "mercurio":
    case "venus":
    alert("Aqui hace calor");
    break;
        case "tierra":
        alert("Aqui vivimos");
        break;
            case "marte":
            case "jupiter":
            case "saturno":
            case "neptuno":
            case "urano":
            case "pluton":
            alert("Aqui hace frio");
            break;
default:
    alert("Error, Dice Nombre de planeta, no cualquier cosa");
}
}
