"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videojuego = void 0;
class Videojuego {
    constructor(titulo = "", horas_estimadas = 10, genero = "", company = "") {
        this.titulo = titulo;
        this.horas_estimadas = horas_estimadas;
        this.entregado = false;
        this.genero = genero;
        this.company = company;
    }
    getTitulo() {
        return this.titulo;
    }
    // getters y setters
    getHorasEstimadas() {
        return this.horas_estimadas;
    }
    getGenero() {
        return this.genero;
    }
    getCompany() {
        return this.company;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horas_estimadas) {
        this.horas_estimadas = horas_estimadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompany(company) {
        this.company = company;
    }
    toString() {
        return ("Videojuego [titulo=" + this.titulo + ", horasEstimadas=" + this.horas_estimadas + ", entregado=" +
            this.entregado + ", genero=" + this.genero + ", company=" + this.company + "]");
    }
    compareTo(a) {
        let esMasLargo = false;
        if ((this.horas_estimadas < a.getHorasEstimadas())) {
            esMasLargo = true;
        }
        return esMasLargo;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = true;
    }
    isEntregado() {
        return this.entregado;
    }
}
exports.Videojuego = Videojuego;
