/*
Condicionales en JavaScript
*/

// Condicional if
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Condicional if-else
let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// Condicional switch
let dia = "Lunes";

switch (dia) {
    case "Lunes":
        console.log("Hoy es lunes");
        break;
    case "Martes":
        console.log("Hoy es martes");
        break;
    case "Miércoles":
        console.log("Hoy es miércoles");
        break;
    case "Jueves":
        console.log("Hoy es jueves");
        break;
    case "Viernes":
        console.log("Hoy es viernes");
        break;
    default:
        console.log("No es un día válido");
        break;
}            

//comparacion usando una operacion matematica
let resultado = numero * 2;

if (resultado > 20) {
    console.log("El resultado es mayor que 20");
} else if (resultado < 20) {
    console.log("El resultado es menor que 20");
} else {
    console.log("El resultado es igual a 20");
}

//operador ternario
let edad = 17;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

/*
Condicionales en clase

*/

let nombre = 'Fernando'

if (nombre === 'Fernando') {
    console.log('Hola Fer')
} else if (nombre === 'Cristian') {
    console.log('Hola Cris')
} else {
    console.log('No encontre tu nombre')
}