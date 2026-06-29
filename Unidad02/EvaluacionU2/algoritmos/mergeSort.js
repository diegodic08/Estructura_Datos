/**
 * Merge Sort
 * Ordena clientes por turno
 * Complejidad:
 * O(n log n)
 */

function mergeSort(clientes) {

    if (clientes.length <= 1) {

        return clientes;

    }

    const mitad = Math.floor(clientes.length / 2);

    const izquierda = mergeSort(clientes.slice(0, mitad));

    const derecha = mergeSort(clientes.slice(mitad));

    return combinar(izquierda, derecha);

}

function combinar(izquierda, derecha) {

    let resultado = [];

    let i = 0;

    let j = 0;

    while (i < izquierda.length && j < derecha.length) {

        if (izquierda[i].turno < derecha[j].turno) {

            resultado.push(izquierda[i]);

            i++;

        } else {

            resultado.push(derecha[j]);

            j++;

        }

    }

    while (i < izquierda.length) {

        resultado.push(izquierda[i]);

        i++;

    }

    while (j < derecha.length) {

        resultado.push(derecha[j]);

        j++;

    }

    return resultado;

}