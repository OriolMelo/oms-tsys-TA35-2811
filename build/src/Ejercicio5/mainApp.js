"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej5 = void 0;
const Cine_1 = require("./Cine");
const Espectador_1 = require("./Espectador");
const Pelicula_1 = require("./Pelicula");
function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function ej5() {
    let peli = new Pelicula_1.Pelicula();
    let precio = generarAleatorio(1, 30);
    let filas = 8;
    let columnas = 9;
    let cine = new Cine_1.Cine(peli, precio, filas, columnas);
    let espectadores = generarAleatorio(1, (filas * columnas));
    let espectadores_anadidos = 0;
    while (espectadores_anadidos < espectadores) {
        let esp = new Espectador_1.Espectador();
        let fila_espectador = 0;
        let columna_espectador = 0;
        do {
            fila_espectador = generarAleatorio(0, filas - 1);
            columna_espectador = generarAleatorio(0, columnas - 1);
        } while (!cine.asiento_libre(fila_espectador, columna_espectador));
        if (cine.puede_sentarse(esp, fila_espectador, columna_espectador)) {
            cine.sentarse(fila_espectador, columna_espectador, esp);
        }
        espectadores_anadidos++;
    }
    cine.mostrar_cine();
}
exports.ej5 = ej5;
