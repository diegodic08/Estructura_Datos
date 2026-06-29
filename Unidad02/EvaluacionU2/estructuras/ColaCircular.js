class ColaCircular {

    constructor(capacidad = 20) {

        this.capacidad = capacidad;
        this.cola = new Array(capacidad);

        this.front = -1;
        this.rear = -1;

    }

    // Verifica si la cola está vacía
    estaVacia() {

        return this.front === -1;

    }

    // Verifica si la cola está llena
    estaLlena() {

        return (
            (this.front === 0 && this.rear === this.capacidad - 1) ||
            (this.rear + 1) % this.capacidad === this.front
        );

    }

    // Insertar un cliente
    encolar(cliente) {

        if (this.estaLlena()) {

            return false;

        }

        // Primer elemento
        if (this.estaVacia()) {

            this.front = 0;
            this.rear = 0;

        } else {

            this.rear = (this.rear + 1) % this.capacidad;

        }

        this.cola[this.rear] = cliente;

        return true;

    }

    // Atender cliente
    desencolar() {

        if (this.estaVacia()) {

            return null;

        }

        const cliente = this.cola[this.front];

        this.cola[this.front] = null;

        // Si era el último elemento
        if (this.front === this.rear) {

            this.front = -1;
            this.rear = -1;

        } else {

            this.front = (this.front + 1) % this.capacidad;

        }

        return cliente;

    }

    // Cliente que será atendido
    frente() {

        if (this.estaVacia()) {

            return null;

        }

        return this.cola[this.front];

    }

    // Número de clientes en la cola
    tamaño() {

        if (this.estaVacia()) {

            return 0;

        }

        if (this.rear >= this.front) {

            return this.rear - this.front + 1;

        }

        return this.capacidad - this.front + this.rear + 1;

    }

    // Mostrar todos los clientes
    obtenerElementos() {

        let elementos = [];

        if (this.estaVacia()) {

            return elementos;

        }

        let i = this.front;

        while (true) {

            elementos.push(this.cola[i]);

            if (i === this.rear) {

                break;

            }

            i = (i + 1) % this.capacidad;

        }

        return elementos;

    }

    // Buscar cliente por turno
    buscarPorTurno(turno) {

        if (this.estaVacia()) {

            return null;

        }

        let i = this.front;

        while (true) {

            if (this.cola[i].turno == turno) {

                return this.cola[i];

            }

            if (i === this.rear) {

                break;

            }

            i = (i + 1) % this.capacidad;

        }

        return null;

    }

    // Vaciar la cola
    limpiar() {

        this.cola = new Array(this.capacidad);

        this.front = -1;
        this.rear = -1;

    }

    // Información técnica de la cola
    estadoInterno() {

        return {
            front: this.front,
            rear: this.rear,
            capacidad: this.capacidad,
            ocupados: this.tamaño()
        };

    }

}