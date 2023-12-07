"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(titulo, num_temporadas = 3, genero = "", creador) {
        this.titulo = titulo;
        this.num_temporadas = num_temporadas;
        this.entregado = false;
        this.genero = genero;
        this.creador = creador;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getNum_temporadas() {
        return this.num_temporadas;
    }
    setNum_temporadas(num_temporadas) {
        this.num_temporadas = num_temporadas;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    getCreador() {
        return this.creador;
    }
    setCreador(creador) {
        this.creador = creador;
    }
    toString() {
        return ("Serie [titulo=" + this.titulo + ", numTemporadas=" + this.num_temporadas + ", entregado=" +
            this.entregado + ", genero=" + this.genero + ", creador=" + this.creador + "]");
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
    compareTo(a) {
        let esMasLargo = false;
        if (this.num_temporadas < a.getNum_temporadas()) {
            esMasLargo = true;
        }
        return esMasLargo;
    }
}
exports.Serie = Serie;
