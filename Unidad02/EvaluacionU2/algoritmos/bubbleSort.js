/**
 * Bubble Sort
 * Ordena un arreglo de clientes por número de turno (ascendente)
 * Complejidad:
 *  Mejor caso: O(n)
 *  Promedio: O(n²)
 *  Peor caso: O(n²)
 */

function bubbleSort(clientes) {

    let arreglo = [...clientes];

    const n = arreglo.length;

    for (let i = 0; i < n - 1; i++) {

        let intercambio = false;

        for (let j = 0; j < n - i - 1; j++) {

            if (arreglo[j].turno > arreglo[j + 1].turno) {

                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = aux;

                intercambio = true;

            }

        }

        if (!intercambio) {

            break;

        }

    }

    return arreglo;

}