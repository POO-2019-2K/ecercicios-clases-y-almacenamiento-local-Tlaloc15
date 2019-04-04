import Inscripciones from "./Inscripciones.js";

class Main {
    constructor() {
        var nCuenta = document.querySelector("#nCuenta").value;
        var name = document.querySelector("#name").value;

        var todos = [];
        var local;


        document.querySelector("#btnAdd").addEventListener("click", () => {

            if( todos == local) {
                alert("Alumno registrado correctamente")
            

            let objAlumno = {
                nCuenta : nCuenta,
                name : name,
            };

            let Inscripcion = new Inscripciones(objAlumno);
            let found = -1;
            cuentas.forEach((e, index) => {
                if(e.nCuenta === nCuenta) {
                    found = index;
                }
            });
            if (found >= 0) {
                alert("Esta cuenta ya existe");
            }else{

            let local = JSON.parse(localStorage.getItem("inscripciones-2"))

            if (local != null) {
                todos = local;
            }

            todos.push(Inscripcion);

            localStorage.setItem("inscripciones-2", JSON.stringify(todos));
            console.log(JSON.parse (localStorage.getItem("inscripciones-2")));
        }
                alert("Estudiante agregado");

                localStorage.clear();
                console.log(todos);
            }
        });
    }

}
let m = new Main();