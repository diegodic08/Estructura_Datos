/**
 * Busca un cliente por número de turno utilizando recursividad.
 *
 * @param {Array} clientes
 * @param {Number} turno
 * @param {Number} indice
 * @returns Cliente | null
 */

function busquedaRecursiva(clientes, turno, indice = 0) {

    // Caso base: terminó el arreglo
    if (indice >= clientes.length) {

        return null;

    }

    // Caso base: cliente encontrado
    if (clientes[indice].turno == turno) {

        return clientes[indice];

    }

    // Llamada recursiva
    return busquedaRecursiva(clientes, turno, indice + 1);

}