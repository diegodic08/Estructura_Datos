/**
 * Insertion Sort
 * Ordena clientes por turno
 * Complejidad:
 *  Mejor caso: O(n)
 *  Promedio: O(n²)
 *  Peor caso: O(n²)
 */

function insertionSort(clientes) {

    let arreglo = [...clientes];

    for (let i = 1; i < arreglo.length; i++) {

        let actual = arreglo[i];

        let j = i - 1;

        while (j >= 0 && arreglo[j].turno > actual.turno) {

            arreglo[j + 1] = arreglo[j];

            j--;

        }

        arreglo[j + 1] = actual;

    }

    return arreglo;

}