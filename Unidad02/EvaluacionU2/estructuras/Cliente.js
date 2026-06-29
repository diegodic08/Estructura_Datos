class Cliente{

    constructor(turno,nombre,tramite){

        this.turno=turno;
        this.nombre=nombre;
        this.tramite=tramite;

        this.hora=new Date().toLocaleTimeString();

    }

    informacion(){

        return `Turno: ${this.turno}
Cliente: ${this.nombre}
Trámite: ${this.tramite}
Hora: ${this.hora}`;

    }

}