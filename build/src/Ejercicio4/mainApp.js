"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej4 = void 0;
const Aula_1 = require("./Aula");
const Estudiante_1 = require("./Estudiante");
const Profesor_1 = require("./Profesor");
function random(max) {
    return Math.floor(Math.random() * max);
}
function ej4() {
    let profesor = new Profesor_1.Profesor("Hanna", 43, 'F');
    let aula = new Aula_1.Aula(3, 4, "filosofia", profesor);
    let nombres = ["Hanna", "Marc", "Anna"];
    let genero = ["M", "F"];
    for (let i = 0; i < aula.getMaximoEstudiantes(); i++) {
        let estudiante = new Estudiante_1.Estudiante(nombres[i % 3], random(5) + 18, genero[random(2)], random(11));
        aula.anadirEstudiante(estudiante);
    }
    if (aula.puedeDarClase()) {
        console.log("Puede dar clase");
        aula.sacarNotas();
    }
    else {
        console.log("No puede dar clase");
    }
}
exports.ej4 = ej4;
