"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = void 0;
class Aula {
    constructor(identificador, maximoEstudiantes, materia, profesor) {
        this.estudiantes = [];
        this.identificador = identificador;
        this.maximoEstudiantes = maximoEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
    }
    getMaximoEstudiantes() {
        return this.maximoEstudiantes;
    }
    puedeDarClase() {
        return (this.profesor.getMateria() === this.materia && this.profesor.isDisponible() && this.mayoriaAsistenciaEstudiantes());
    }
    anadirEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
    mayoriaAsistenciaEstudiantes() {
        let calcularEstudiantes = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].isDisponible()) {
                calcularEstudiantes++;
            }
        }
        let mayoria_presente = false;
        if ((calcularEstudiantes > this.estudiantes.length / 2)) {
            mayoria_presente = true;
        }
        return mayoria_presente;
    }
    sacarNotas() {
        let contadorChicos = 0;
        let contadorChicas = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if ((this.estudiantes[i].getCalificacion() >= 5)) {
                if ((this.estudiantes[i].getSexo() == 'M')) {
                    contadorChicos++;
                }
                else if ((this.estudiantes[i].getSexo() == 'F')) {
                    contadorChicas++;
                }
            }
        }
        console.log("Hay " + contadorChicos + " chicos aprobados y " + contadorChicas + " chicas aprobadas");
    }
}
exports.Aula = Aula;
