export default class Inscripciones {

    constructor(inscripcion) {
        this._nCuenta = inscripcion.nCuenta;
        this._name = inscripcion.name;
    }

    get nCuenta() {
        return this._nCuenta;

    }

    get name() {
        return this._name;
    }

    
}
