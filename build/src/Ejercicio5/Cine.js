"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
const Asiento_1 = require("./Asiento");
class Cine {
    constructor(pelicula, precio_entrada, filas, columnas) {
        this.pelicula = pelicula;
        this.precio_entrada = precio_entrada;
        this.asientos = this.llenar_cine(filas, columnas);
    }
    llenar_cine(filas, columnas) {
        let sitios_totales = new Array(filas);
        for (let i = 0; i < filas; i++) {
            sitios_totales[i] = new Array(columnas);
        }
        let fila = filas;
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                sitios_totales[i][j] = new Asiento_1.Asiento(fila, (String.fromCharCode(65 + j)));
            }
            fila--;
        }
        return sitios_totales;
    }
    asiento_libre(fila, columna) {
        return this.asientos[fila][columna].esta_libre();
    }
    puede_sentarse(espectador, fila, columna) {
        return (espectador.puede_sentarse(this.precio_entrada, this.pelicula.getEdad_minima()) && this.asientos[fila][columna].esta_libre());
    }
    sentarse(fila, columna, espectador) {
        this.asientos[fila][columna].ocupar_asiento(espectador);
    }
    mostrar_cine() {
        this.pelicula.mostrar_pelicula();
        console.log(("Precio: " + this.precio_entrada));
        for (let i = 0; (i < this.asientos.length); i++) {
            for (let j = 0; (j < this.asientos[0].length); j++) {
                this.asientos[i][j].mostrar_asiento();
            }
        }
    }
}
exports.Cine = Cine;
