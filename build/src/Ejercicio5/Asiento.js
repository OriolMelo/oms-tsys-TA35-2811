"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asiento = void 0;
class Asiento {
    constructor(fila, columna) {
        this.OCUPADO_BASE = false;
        this.fila = fila;
        this.columna = columna;
        this.ocupado = this.OCUPADO_BASE;
        this.espectador = null;
    }
    ocupar_asiento(espectador) {
        this.espectador = espectador;
        this.ocupado = true;
    }
    esta_libre() {
        return !this.ocupado;
    }
    mostrar_asiento() {
        var _a;
        if (this.ocupado) {
            console.log("Asiento " + this.fila + this.columna + " continene a " + ((_a = this.espectador) === null || _a === void 0 ? void 0 : _a.mostrar_espectador()));
        }
        else {
            console.log("Asiento " + this.fila + this.columna + " está vacio");
        }
    }
}
exports.Asiento = Asiento;
