/*
Estructura Switch

*/

//costos de una fruta en la tienda

let comprar = "mangos";

switch(comprar){    
    case "naranjas":
    console.log("El costo de las naranjas es Q16 la mano");
        break;
    case "platanos":
    console.log("El costo de los platanos es Q12 la docena");
        break;
    case "manzanas":
    console.log("El costo de las manzanas es Q5 la unidad");
    //casos compartidos
    case "mangos":
    case "papayas":
    console.log("El costo de los mangos y papayas es Q8 la unidad");
        break;
    default:
    console.log(`no se encontro la fruta para ${comprar}`);
        break;
}