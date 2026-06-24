/*
EJERCICIO 1.1
*/
function sumaDigitos(n) {
    // TODO: Implementar el Caso Base
    if (n === 0) {
        return 0;
    }

    // TODO: Implementar el Caso Recursivo
    let ultimoDigito = n % 10;
    let restoDelNumero = Math.floor(n / 10);
    
    return ultimoDigito + sumaDigitos(restoDelNumero);
}

// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");
console.log("Ejercicio 1.1 superado.");


/*
EJERCICIO 1.2
*/
function potencia(base, exponente) {
    // TODO: Implementar algoritmo recursivo optimizado
    if (exponente === 0) {
        return 1;
    }

    let mitad = potencia(base, Math.floor(exponente / 2));

    if (exponente % 2 === 0) {
        return mitad * mitad;
    } 
    else {
        return base * mitad * mitad;
    }
}

// Casos de prueba para validación
console.assert(potencia(2, 10) === 1024, "Error en potencia(2, 10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");
console.log("Ejercicio 1.2 superado.");


/*
EJERCICIO 2.1
*/
function invertirArreglo(arr, inicio, fin) {
    // TODO: Identificar la condición de parada (Caso Base)
    if (inicio >= fin) {
        return; 
    }
    // TODO: Realizar el intercambio e invocar la recursividad
    let temporal = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temporal;

    invertirArreglo(arr, inicio + 1, fin - 1);
}

// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40, 30, 20, 10]));
console.log("Ejercicio 2.1 superado.");


/*
EJERCICIO 2.2
*/
function busquedaBinariaRecursiva(arr, objetivo, bajo, alto) {
    // TODO: Caso Base 1: El rango de búsqueda es inválido
    if (bajo > alto) {
        return -1;
    }
    // TODO: Calcular el punto medio (entero)
    let medio = Math.floor((bajo + alto) / 2);
    // TODO: Caso Base 2: El elemento en el medio es el objetivo
    if (arr[medio] === objetivo) {
        return medio;
    }
    // TODO: Casos Recursivos: Reducir el espacio de búsqueda
    if (arr[medio] > objetivo) {
        return busquedaBinariaRecursiva(arr, objetivo, bajo, medio - 1);
    } else {
        return busquedaBinariaRecursiva(arr, objetivo, medio + 1, alto);
    }
}

// Casos de prueba para validación
const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.assert(busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9) === 5);
console.assert(busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9) === -1);
console.log("Ejercicio 2.2 superado.");


/*
EJERCICIO 3.1
*/
class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function recorridoInorden(raiz) {
    // TODO: Implementar el recorrido recursivo
    if (raiz === null) {
        return [];
    }
    return [
        ...recorridoInorden(raiz.izquierdo),
        raiz.valor,
        ...recorridoInorden(raiz.derecho)
    ];
}

function recorridoPreorden(raiz) {
    // TODO: Implementar el recorrido recursivo
    if (raiz === null) {
        return [];
    }
    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierdo),
        ...recorridoPreorden(raiz.derecho)
    ];
}

function recorridoPostorden(raiz) {
    // TODO: Implementar el recorrido recursivo
    if (raiz === null) {
        return [];
    }
    return [
        ...recorridoPostorden(raiz.izquierdo),
        ...recorridoPostorden(raiz.derecho),
        raiz.valor
    ];
}

let raiz = new NodoArbol(1);
raiz.izquierdo = new NodoArbol(2);
raiz.derecho = new NodoArbol(3);
raiz.izquierdo.izquierdo = new NodoArbol(4);
raiz.izquierdo.derecho = new NodoArbol(5);

// 2. Pruebas automatizadas
console.assert(
    JSON.stringify(recorridoPreorden(raiz)) === JSON.stringify([1, 2, 4, 5, 3]), 
    "Error en recorridoPreorden"
);

console.assert(
    JSON.stringify(recorridoInorden(raiz)) === JSON.stringify([4, 2, 5, 1, 3]), 
    "Error en recorridoInorden"
);

console.assert(
    JSON.stringify(recorridoPostorden(raiz)) === JSON.stringify([4, 5, 2, 3, 1]), 
    "Error en recorridoPostorden"
);

console.log("Ejercicio 3.1 superado.");


/*
PREGUNTA 4.1
*/
function fibonacciArbolGrafico(n, prefijo = "", esDerecho = true) {
    console.log(prefijo + (esDerecho ? "├── " : "└── ") + `fibonacci(${n})`);
    
    if (n <= 1) {
        return n;
    }
    
    let nuevoPrefijo = prefijo + (esDerecho ? "│   " : "    ");
    fibonacciArbolGrafico(n - 1, nuevoPrefijo, true);
    fibonacciArbolGrafico(n - 2, nuevoPrefijo, false);
}

console.log("Árbol de llamadas de Ejecución");
fibonacciArbolGrafico(4);


/*
EJERCICIO 4.3
*/
function factorialCola(n, acumulador = 1) {
    if (n <= 1) {
        return acumulador;
    }

    return factorialCola(n - 1, n * acumulador);
}

console.assert(factorialCola(5) === 120, "Error en factorialCola(5)");
console.assert(factorialCola(0) === 1, "Error en factorialCola(0)");
console.log("Pregunta 4.3 completada con éxito.");
