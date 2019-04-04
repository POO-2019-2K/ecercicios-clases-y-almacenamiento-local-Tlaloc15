import Movimientos from "./movimiento.js"
import Cuenta from "./Cuenta.js";

class Main{
    constructor(){
    this._list = new Movimientos(document.querySelector("#list"), document.querySelector('#info'));

    document.querySelector("#btn1").addEventListener("click", () => {
        let nCuenta = document.querySelector("#nCuenta").value;
        let name = document.querySelector("#name").value;
        let opcion = document.querySelector("#opcion").value;
        let cantidad = document.querySelector("#cantidad").value;

        let cliente = new Cuenta(nCuenta, name, opcion, cantidad);
        this._list.addMove(cliente);
    });

}
}

let m = new Main();