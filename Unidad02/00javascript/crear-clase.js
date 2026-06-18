class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad
        this.edad = edad;     // Propiedad
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const usuario1 = new Persona("Carlos", 28);
console.log(usuario1.saludar()); 
