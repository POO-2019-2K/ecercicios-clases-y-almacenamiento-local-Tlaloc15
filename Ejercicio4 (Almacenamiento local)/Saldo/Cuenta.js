export default class Cuenta {

    constructor(cuenta){
        this._nCuenta = cuenta.nCuenta;
        this._name = cuenta.name;
        this._opcion = cuenta.opcion;
        this._cantidad = cuenta.cantidad;
        this._balance = 0;
    }

    get nCuenta() {
        return this._nCuenta;
    }

    get name() {
        return this._name;
    }

    get opcion() {
        return this._opcion;
    }

    get cantidad() {
        return this._cantidad;
    }

    getDeposito() {
        this._balance = Number(this._balance) + Number(this._cantidad);
        return this._balance;
    }

    getRetiro() {
        this._balance = Number(this._balance) - Number(this._cantidad);
        return this._balance;
    }

    getDinero() {
        return this._balance
    }
}