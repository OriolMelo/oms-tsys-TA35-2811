"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const Persona_1 = require("./Persona");
class Profesor extends Persona_1.Persona {
    constructor(nombre, edad, sexo) {
        super(nombre, edad, sexo);
        this.materia = this.listaMateria();
        this.disponible = this.registroAusencia();
    }
    getMateria() {
        return this.materia;
    }
    setMateria(materia) {
        this.materia = materia;
    }
    nextInt(max) {
        return Math.floor(Math.random() * max);
    }
    registroAusencia() {
        let randomNumber = this.nextInt(101);
        let disp = true;
        if ((randomNumber < 20)) {
            disp = false;
            ;
        }
        return disp;
    }
    listaMateria() {
        let materias = ["matematicas", "filosofia", "fisica"];
        return materias[this.nextInt(3)];
    }
    isDisponible() {
        return this.disponible;
    }
    setDisponible(disponible) {
        this.disponible = disponible;
    }
}
exports.Profesor = Profesor;
