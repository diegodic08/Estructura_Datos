class Pila {

    constructor(capacidad = 20) {

        this.capacidad = capacidad;
        this.elementos = [];
        this.tope = -1;

    }

    // Verifica si la pila está vacía
    estaVacia() {

        return this.tope === -1;

    }

    // Verifica si la pila está llena
    estaLlena() {

        return this.tope === this.capacidad - 1;

    }

    // Agregar elemento (PUSH)
    push(cliente) {

        if (this.estaLlena()) {

            return false;

        }

        this.tope++;
        this.elementos[this.tope] = cliente;

        return true;

    }

    // Eliminar elemento (POP)
    pop() {

        if (this.estaVacia()) {

            return null;

        }

        const cliente = this.elementos[this.tope];

        this.elementos.splice(this.tope, 1);

        this.tope--;

        return cliente;

    }

    // Ver el elemento del tope
    peek() {

        if (this.estaVacia()) {

            return null;

        }

        return this.elementos[this.tope];

    }

    // Cantidad de elementos
    tamaño() {

        return this.tope + 1;

    }

    // Obtener todos los elementos
    obtenerElementos() {

        return [...this.elementos];

    }

    // Buscar cliente por turno
    buscar(turno) {

        for (let i = this.tope; i >= 0; i--) {

            if (this.elementos[i].turno == turno) {

                return this.elementos[i];

            }

        }

        return null;

    }

    // Vaciar pila
    limpiar() {

        this.elementos = [];
        this.tope = -1;

    }

}