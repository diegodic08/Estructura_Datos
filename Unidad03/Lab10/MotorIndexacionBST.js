// Estructura del Nodo del Índice
class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword         
        this.urlCache = urlCache       
        this.visitas = 1           
        this.izquierdo = null
        this.derecho = null
    }
}

// Implementación del TDA Árbol Binario de Búsqueda
class MotorIndexacionBST {
    constructor() {
        this.raiz = null
    }

    // Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
    const nuevoNodo = new NodoBusqueda(keyword, urlCache)
    if (this.raiz === null) {
        this.raiz = nuevoNodo
        return
    }

    let actual = this.raiz;
    while (true) {
        if (keyword === actual.keyword) {
            actual.visitas++;
            return;
        } else if (keyword < actual.keyword) {
            if (actual.izquierdo === null) {
                actual.izquierdo = nuevoNodo;
                return;
            }
            actual = actual.izquierdo;   
        } else {
            if (actual.derecho === null) {
                actual.derecho = nuevoNodo;
                return;
            }
            actual = actual.derecho;     
        }
    }
}

  _insertarNodo(nodoActual, nuevoNodo) {
    const comparacion = nuevoNodo.keyword.localeCompare(nodoActual.keyword);
    if (comparacion === 0) {
      nodoActual.visitas++;
      return;
    }
    if (comparacion < 0) {
      if (nodoActual.izquierdo === null) {
        nodoActual.izquierdo = nuevoNodo;
      } else {
        this._insertarNodo(nodoActual.izquierdo, nuevoNodo);
      }
    } else {
      if (nodoActual.derecho === null) {
        nodoActual.derecho = nuevoNodo;
      } else {
        this._insertarNodo(nodoActual.derecho, nuevoNodo);
      }
    }
  }

 buscar(keyword) {
        let actual = this.raiz;
        while (actual !== null) {
            if (keyword === actual.keyword) {
                return actual;
            } else if (keyword < actual.keyword) {
                actual = actual.izquierdo;
            } else {
                actual = actual.derecho;
            }
        }
        return null; // No encontrado
    }

    // Recorrido Inorden: exporta el historial ordenado alfabéticamente (A-Z)
    exportarHistorial(nodo = this.raiz, resultado = []) {
        if (nodo !== null) {
            this.exportarHistorial(nodo.izquierdo, resultado);
            resultado.push({
                keyword: nodo.keyword,
                urlCache: nodo.urlCache,
                visitas: nodo.visitas
            });
            this.exportarHistorial(nodo.derecho, resultado);
        }
        return resultado;
    }  

} 

module.exports = { NodoBusqueda, MotorIndexacionBST };

const { MotorIndexacionBST } = require('./MotorIndexacionBST');

function generarPalabrasSecuenciales(cantidad, longitud = 4) {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const palabras = [];
    let indices = new Array(longitud).fill(0);
    for (let c = 0; c < cantidad; c++) {
        palabras.push(indices.map(i => letras[i]).join(''));
        let pos = longitud - 1;
        while (pos >= 0) {
            indices[pos]++;
            if (indices[pos] < 26) break;
            indices[pos] = 0;
            pos--;
        }
    }
    return palabras;
}

function fisherYatesShuffle(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function buscarConCiclos(motor, keyword) {
    let ciclosCPU = 0;
    let actual = motor.raiz;
    while (actual !== null) {
        ciclosCPU++;
        if (keyword === actual.keyword) {
            break;
        } else if (keyword < actual.keyword) {
            actual = actual.izquierdo;
        } else {
            actual = actual.derecho;
        }
    }
    return ciclosCPU;
}

const CANTIDAD = 20000;
const palabrasBase = generarPalabrasSecuenciales(CANTIDAD);
const ultimaPalabra = palabrasBase[palabrasBase.length - 1];

const motorDegenerado = new MotorIndexacionBST();
for (const palabra of palabrasBase) {
    motorDegenerado.indexar(palabra, `cache://${palabra}`);
}
const ciclosDegenerado = buscarConCiclos(motorDegenerado, ultimaPalabra);
console.log(`Búsqueda en árbol degenerado: ${ciclosDegenerado} ciclos de CPU`);

const motorBalanceado = new MotorIndexacionBST();
const palabrasBarajadas = fisherYatesShuffle(palabrasBase);
for (const palabra of palabrasBarajadas) {
    motorBalanceado.indexar(palabra, `cache://${palabra}`);
}
const ciclosBalanceado = buscarConCiclos(motorBalanceado, ultimaPalabra);
console.log(`Búsqueda en árbol pseudo-balanceado: ${ciclosBalanceado} ciclos de CPU`);
const ahorro = ((ciclosDegenerado - ciclosBalanceado) / ciclosDegenerado) * 100;
console.log(`Ahorro de ciclos de CPU: ${ahorro.toFixed(2)}%`);