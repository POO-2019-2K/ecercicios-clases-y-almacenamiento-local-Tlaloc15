import Cuentas from "./Cuenta.js";

class Main {
    constructor() {
        var nCuenta = document.querySelector("#nCuenta").value;
        var name = document.querySelector("#name").value;

        var todos = [];
        this._totalDeposito = 0;
        this._totalRetiro = 0;
        

        document.querySelector("#btnAdd").addEventListener("click", () => {

            let objCuenta = {
                nCuenta : nCuenta,
                name : name,
            };

            let Cuenta = new Cuentas(objCuenta);

            todos = [];
            let local = JSON.parse(localStorage.getItem("cuentas-2"))

            if (local != null) {
                todos = local;
            }

            console.log(todos);

            todos.push(Cuenta);

            localStorage.setItem("cuentas-2", JSON.stringify(todos));
            console.log(JSON.parse(localStorage.getItem("cuentas-2")));


            if(opcion === "1"){
                this._totalDeposito = getDeposito();
            }

            if(opcion === "2"){
                this._totalRetiro = getRetiro();
            }

        });
    }
}

let m = new Main();