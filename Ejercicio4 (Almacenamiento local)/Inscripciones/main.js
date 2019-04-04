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

            todos = [];
            let local = JSON.parse(localStorage.getItem("inscripciones-2"))

            if (local != null) {
                todos = local;
            }

            console.log(todos);

            todos.push(Inscripcion);

            localStorage.setItem("inscripciones-2", JSON.stringify(todos));
            console.log(JSON.parse (localStorage.getItem("inscripciones-2")));
        }
            else{
                alert("Alumno ya había sido registrado")
            }
        });
    }

}
let m = new Main();