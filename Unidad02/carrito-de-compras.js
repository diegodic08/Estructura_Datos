class Producto {
    constructor(codigo, nombre, precio, iva) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.iva = iva;
    }

    agregarAlCarrito(cantidad) {
        return {
            producto: this,
            cantidad: cantidad,
            total: (this.precio * cantidad) + (this.precio * cantidad * this.iva)
        };
    }

    eliminarDelCarrito(cantidad) {
        return {
            producto: this,
            cantidad: -cantidad,
            total: -this.precio * cantidad
        };
    }

    actualizarCantidad(cantidad) {
        return {
            producto: this,
            cantidad: cantidad,
            total: this.precio * cantidad
        };
    }

    vaciarCarrito() {
        return {
            producto: this,
            cantidad: 0,
            total: 0
        };
    }

    mostrarDetalles() {
        return `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}, IVA: ${this.iva}`;
    }
    
}

const producto1 = new Producto(1, "Laptop", 1000, 0.21);
console.log(producto1.mostrarDetalles());

const carrito = [];
carrito.push(producto1.agregarAlCarrito(2));
console.log(carrito);

carrito.push(producto1.actualizarCantidad(3));
console.log(carrito);

carrito.push(producto1.eliminarDelCarrito(1));
console.log(carrito);

carrito.push(producto1.vaciarCarrito());
console.log(carrito);
