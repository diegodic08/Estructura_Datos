/*
Pregunta 1: Escribe un código que cree variables y las inicialice con valores deBooleano,Número,BigInt,Cadenay tipos indefinidos utilizando 
(cuando sea posible) literales y funciones constructoras
*/

let boolean1 = true
let booleanConstructor = Boolean(false);

let n1 = 42;
let numeroConstructor = Number(3.14);

let bigint1 = 900719925474n;
let bigintConstructor = BigInt(123456);

let string1 = "Hello Mundo";
let stringConstructor = String("Javascript");

let undefinedValue = undefined;

/*
Pregunta 2: Imprime todos los valores y todos los tipos de esos valores usandoregistro de consolaIntenta usar la interpolación de cadenas para mostrar el 
valor y el tipo al mismo tiempo con una sola cadena.registro de consolallamar, por ejemplo, en el siguiente formato:1000 [número]
*/

console.log(`${boolean1} [${typeof boolean1}]`);
console.log(`${booleanConstructor} [${typeof booleanConstructor}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${numeroConstructor} [${typeof numeroConstructor}]`);
console.log(`${bigint1} [${typeof bigint1}]`);
console.log(`${bigintConstructor} [${typeof bigintConstructor}]`);
console.log(`${string1} [${typeof string1}]`);
console.log(`${stringConstructor} [${typeof stringConstructor}]`);
console.log(`${undefinedValue} [${typeof undefinedValue}]`);

/*
Pregunta 3: Realizar una cadena de conversiones: crear unaBooleanode unBigIntcreado a partir de unNúmeroque fue creado a partir de unCadena. Empiece con el 
valor"1234". ¿Es posible?
*/

let boolean = Boolean( BigInt(Number("1234")));
console.log(`${boolean} [${typeof boolean}]`);

// or

let string = "1234";
let numero = Number(string);
let bigint = BigInt(numero);
let boolean = Boolean(bigint);
console.log(`${boolean} [${typeof boolean}]`);

/*
Pregunta 4: Intenta sumar dos valores del mismo tipo y comprueba el tipo resultante. Inténtalo con todos los tipos primitivos
*/

let boolean = true + false;
let numero = 100 + 200;
let bigint = 100n + 200n;
let string = "He" + "llo";
let undefinedValue = undefined + undefined;

console.log(`${boolean} [${typeof boolean}]`);
console.log(`${numero} [${typeof numero}]`);
console.log(`${bigint} [${typeof bigint}]`);
console.log(`${string} [${typeof string}]`);
console.log(`${undefinedValue} [${typeof undefinedValue}]`);

/*
Pregunta 5: Intenta sumar dos valores de diferentes tipos y comprueba los resultados
*/

let boolean1 = true + 130; 

let b3 = true + "100"; 

let number2 = 120 + true;
let number3 = 333 + "200";


let bigint3 = 100n + "200"; 
let string1 = "100" + 233;
let string2 = "100" + 200n;
let string3 = "999" + true;
let string4 = "abc" + 273;
let string5 = "abc" + 250n;
let string6 = "abc" + true;

console.log(`${boolean1} [${typeof boolean1}]`);
console.log(`${b3} [${typeof b3}]`);
console.log(`${number2} [${typeof number2}]`);
console.log(`${number3} [${typeof number3}]`);
console.log(`${bigint3} [${typeof bigint3}]`);
console.log(`${string1} [${typeof string1}]`);
console.log(`${string2} [${typeof string2}]`);
console.log(`${string3} [${typeof string3}]`);
console.log(`${string4} [${typeof string4}]`);
console.log(`${string5} [${typeof string5}]`);
console.log(`${string6} [${typeof string6}]`);

/*
Pregunta 6: Intenta modificar la líneaconst str1 = 42 + "1";para obtener el resultado43(sin eliminar las comillas alrededor1)
*/

const string = 77 + +"1";

console.log(string);
console.log(typeof string);