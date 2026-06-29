/******************************************************
 * SISTEMA DE GESTIÓN DE TURNOS - BANCO
 * Archivo principal
 ******************************************************/

//==============================
// ESTRUCTURAS PRINCIPALES
//==============================

const cola = new ColaCircular(20);

const historial = [];

const pilaDemostracion = new Pila(20);


//==============================
// UTILIDADES
//==============================

function limpiarResultado(){

    document.getElementById("resultado").innerHTML = "";

}

function imprimir(texto){

    document.getElementById("resultado").innerHTML += texto + "<br>";

}

function separador(){

    imprimir("------------------------------------------");

}

//==============================
// VERIFICAR TURNO REPETIDO
//==============================

function existeTurno(turno){

    const clientes = cola.obtenerElementos();

    for(let cliente of clientes){

        if(cliente.turno == turno){

            return true;

        }

    }

    return false;

}

//==============================
// REGISTRAR CLIENTE
//==============================

function registrarCliente(){

    const turno = parseInt(document.getElementById("turno").value);

    const nombre = document.getElementById("nombre").value.trim();

    const tramite = document.getElementById("tramite").value;

    if(isNaN(turno) || nombre===""){

        alert("Complete todos los campos.");

        return;

    }

    const cliente = new Cliente(

        turno,
        nombre,
        tramite

    );

    if(cola.encolar(cliente)){

        pilaDemostracion.push(cliente);

        alert("Cliente registrado correctamente.");

    }else{

        alert("La cola está llena.");

    }

    document.getElementById("turno").value="";

    document.getElementById("nombre").value="";

    mostrarCola();

    if(existeTurno(turno)){

    alert("Ya existe un cliente con ese número de turno.");

    return;

}
}

//==============================
// MOSTRAR COLA FIFO
//==============================

function mostrarCola(){

    limpiarResultado();

    const clientes = cola.obtenerElementos();

    if(clientes.length===0){

        imprimir("No existen clientes en espera.");

        return;

    }

    let html = `

    <h2>Clientes en Espera (FIFO)</h2>

    <table border="1" width="100%" cellspacing="0">

        <tr>

            <th>Turno</th>

            <th>Nombre</th>

            <th>Trámite</th>

            <th>Hora</th>

        </tr>

    `;

    clientes.forEach(cliente=>{

        html += `

        <tr>

            <td>${cliente.turno}</td>

            <td>${cliente.nombre}</td>

            <td>${cliente.tramite}</td>

            <td>${cliente.hora}</td>

        </tr>

        `;

    });

    html += "</table>";

    document.getElementById("resultado").innerHTML = html;

}

//==============================
// ATENDER CLIENTE
//==============================

function atenderCliente(){

    const cliente = cola.desencolar();

    if(cliente==null){

        alert("No existen clientes.");

        return;

    }

    historial.push(cliente);

    limpiarResultado();

    imprimir("<h2>CLIENTE ATENDIDO</h2>");

    imprimir(cliente.informacion());

    separador();

    imprimir("El siguiente cliente ha pasado al frente de la cola.");

}

//==============================
// HISTORIAL
//==============================

function mostrarHistorial(){

    limpiarResultado();

    imprimir("<h2>HISTORIAL DE CLIENTES</h2>");

    if(historial.length===0){

        imprimir("Todavía no se ha atendido ningún cliente.");

        return;

    }

    historial.forEach(cliente=>{

        imprimir(

            `${cliente.turno}
            - ${cliente.nombre}
            - ${cliente.tramite}`

        );

    });

}

//==============================
// ESTADO INTERNO
//==============================

function mostrarEstadoCola(){

    limpiarResultado();

    const estado = cola.estadoInterno();

    imprimir("<h2>ESTADO DE LA COLA CIRCULAR</h2>");

    imprimir("Front : " + estado.front);

    imprimir("Rear : " + estado.rear);

    imprimir("Capacidad : " + estado.capacidad);

    imprimir("Clientes : " + estado.ocupados);

}

//==============================
// DEMOSTRACIÓN LIFO
//==============================

function mostrarPila(){

    limpiarResultado();

    imprimir("<h2>PILA (LIFO)</h2>");

    const elementos = pilaDemostracion.obtenerElementos();

    if(elementos.length===0){

        imprimir("La pila está vacía.");

        return;

    }

    for(let i=elementos.length-1;i>=0;i--){

        imprimir(

            `${elementos[i].turno}
             - ${elementos[i].nombre}`

        );

    }

    separador();

    imprimir(

        "Observe que el último cliente registrado aparece primero."

    );

}

//==============================
// BUBBLE SORT
//==============================

function ordenarBubble(){

    limpiarResultado();

    if(historial.length===0){

        imprimir("No existen clientes en el historial.");

        return;

    }

    const ordenados = bubbleSort(historial);

    imprimir("<h2>Historial Ordenado (Bubble Sort)</h2>");

    ordenados.forEach(cliente=>{

        imprimir(
            `Turno: ${cliente.turno}
            | ${cliente.nombre}
            | ${cliente.tramite}`
        );

    });

}

//==============================
// QUICK SORT
//==============================

function ordenarQuick(){

    limpiarResultado();

    if(historial.length===0){

        imprimir("No existen clientes.");

        return;

    }

    const ordenados = quickSort(historial);

    imprimir("<h2>Historial Ordenado (Quick Sort)</h2>");

    ordenados.forEach(cliente=>{

        imprimir(
            `Turno: ${cliente.turno}
            | ${cliente.nombre}
            | ${cliente.tramite}`
        );

    });

}

//==============================
// MERGE SORT
//==============================

function ordenarMerge(){

    limpiarResultado();

    if(historial.length===0){

        imprimir("No existen clientes.");

        return;

    }

    const ordenados = mergeSort(historial);

    imprimir("<h2>Historial Ordenado (Merge Sort)</h2>");

    ordenados.forEach(cliente=>{

        imprimir(
            `Turno: ${cliente.turno}
            | ${cliente.nombre}
            | ${cliente.tramite}`
        );

    });

}

//==============================
// BUSCAR TURNO
//==============================

function buscarTurno(){

    const turno = parseInt(prompt("Ingrese el número de turno"));

    if(isNaN(turno)){

        return;

    }

    const clientes = cola.obtenerElementos();

    const encontrado = busquedaRecursiva(clientes,turno);

    limpiarResultado();

    if(encontrado==null){

        imprimir("Cliente no encontrado.");

        return;

    }

    imprimir("<h2>CLIENTE ENCONTRADO</h2>");

    imprimir(encontrado.informacion());

}

//==============================
// CONTAR CLIENTES
//==============================

function contarClientes(){

    limpiarResultado();

    const clientes = cola.obtenerElementos();

    const total = contarClientesRecursivo(clientes);

    imprimir("<h2>TOTAL DE CLIENTES EN ESPERA</h2>");

    imprimir(total);

}

//==============================
// REINICIAR
//==============================

function reiniciarSistema(){

    cola.limpiar();

    historial.length = 0;

    pilaDemostracion.limpiar();

    limpiarResultado();

    imprimir("Sistema reiniciado correctamente.");

}

//==============================
// DATOS DE PRUEBA
//==============================

function cargarDatosPrueba(){

    cola.limpiar();

    historial.length = 0;

    pilaDemostracion.limpiar();

    const clientes = [

        new Cliente(15,"Ana","Pago"),
        new Cliente(3,"Pedro","Consulta"),
        new Cliente(9,"Luis","Depósito"),
        new Cliente(20,"Carlos","Retiro"),
        new Cliente(1,"María","Crédito"),
        new Cliente(12,"José","Pago"),
        new Cliente(7,"Andrea","Consulta")

    ];

    clientes.forEach(cliente=>{

        cola.encolar(cliente);

        pilaDemostracion.push(cliente);

    });

    mostrarCola();

}

//==============================
// FIFO VS LIFO
//==============================

function compararFIFOvsLIFO(){

    limpiarResultado();

    imprimir("<h2>COMPARACIÓN FIFO vs LIFO</h2>");

    imprimir("");

    imprimir("<b>FIFO (Cola Circular)</b>");

    cola.obtenerElementos().forEach(cliente=>{

        imprimir(cliente.turno + " - " + cliente.nombre);

    });

    separador();

    imprimir("<b>LIFO (Pila)</b>");

    const pila = pilaDemostracion.obtenerElementos();

    for(let i=pila.length-1;i>=0;i--){

        imprimir(

            pila[i].turno + " - " + pila[i].nombre

        );

    }

}

//==============================
// ESTADÍSTICAS
//==============================

function mostrarEstadisticas(){

    limpiarResultado();

    const esperando = cola.tamaño();

    const atendidos = historial.length;

    const capacidad = cola.capacidad;

    const porcentaje = ((esperando/capacidad)*100).toFixed(2);

    imprimir("<h2>ESTADÍSTICAS</h2>");

    imprimir("");

    imprimir("Clientes esperando: " + esperando);

    imprimir("Clientes atendidos: " + atendidos);

    imprimir("Capacidad máxima: " + capacidad);

    imprimir("Ocupación de la cola: " + porcentaje + "%");

}

function siguienteCliente(){

    limpiarResultado();

    const cliente = cola.frente();

    if(cliente==null){

        imprimir("No existen clientes.");

        return;

    }

    imprimir("<h2>SIGUIENTE CLIENTE</h2>");

    imprimir(cliente.informacion());

}