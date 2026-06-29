/**
 * Quick Sort
 * Ordena clientes por turno usando recursividad
 * Complejidad promedio:
 * O(n log n)
 */

function quickSort(clientes) {

    if (clientes.length <= 1) {

        return clientes;

    }

    let pivote = clientes[clientes.length - 1];

    let menores = [];
    let mayores = [];

    for (let i = 0; i < clientes.length - 1; i++) {

        if (clientes[i].turno < pivote.turno) {

            menores.push(clientes[i]);

        } else {

            mayores.push(clientes[i]);

        }

    }

    return [

        ...quickSort(menores),

        pivote,

        ...quickSort(mayores)

    ];

}