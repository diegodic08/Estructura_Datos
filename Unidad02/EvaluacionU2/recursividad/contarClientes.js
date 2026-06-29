/**
 * Cuenta los clientes utilizando recursividad.
 *
 * @param {Array} clientes
 * @param {Number} indice
 * @returns Number
 */

function contarClientesRecursivo(clientes, indice = 0) {

    // Caso base
    if (indice >= clientes.length) {

        return 0;

    }

    // Cuenta el cliente actual + los restantes
    return 1 + contarClientesRecursivo(clientes, indice + 1);

}