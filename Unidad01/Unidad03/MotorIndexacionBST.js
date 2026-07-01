class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;
        this.urlCache = urlCache;;
        this.visitas = 1;
        this.izquierdo = null;
        this.derecho = null;
    }

}


class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    //Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return;

         let actual = this.raiz;
        while (true){
            if (keyword === actual.keyword){
                actual.visitas++;
                return;
            } else if (keyword < actual.keyword){
                if (actual.izquierdo === null){
                    actual.izquierdo = nuevoNodo;
                    return
                }
            } else {
                if (actual.derecho === null){
                    actual.derecho = nuevoNodo;
                    return
                }
            }

        }
    }
}

}