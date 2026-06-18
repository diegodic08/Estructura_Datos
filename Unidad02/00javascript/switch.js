let expr = "Mangos"

switch (expr) {
    case "Mangos":
        console.log("El precio de los mangos es $1 por 5 unidades")
        break;
    case "Naranjas":
        console.log("El precio de las naranjas es $1 por 10 unidades")
        break;
    case "Manzanas":
        console.log("El precio de las manzanas es $1 por 3 unidades")
        break;
    default:
        console.log(`Lo siento, no tenemos ${expr}`)
        break;
}

console.log("Quiere compra algo más?")
