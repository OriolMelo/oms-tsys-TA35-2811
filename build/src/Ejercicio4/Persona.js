"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
}
exports.Persona = Persona;
