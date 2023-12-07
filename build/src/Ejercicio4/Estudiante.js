"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const Persona_1 = require("./Persona");
class Estudiante extends Persona_1.Persona {
    constructor(nombre, edad, sexo, calificacion) {
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
        this.disponible = this.registroAusencia();
    }
    getCalificacion() {
        return this.calificacion;
    }
    setCalificacion(calificacion) {
        this.calificacion = calificacion;
    }
    nextInt(max) {
        return Math.floor(Math.random() * max);
    }
    registroAusencia() {
        let randomNumber = this.nextInt(101);
        let disp = true;
        if ((randomNumber < 50)) {
            disp = false;
            ;
        }
        return disp;
    }
    isDisponible() {
        return this.disponible;
    }
}
exports.Estudiante = Estudiante;
