"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej1 = void 0;
const Serie_1 = require("./Serie");
const Videojuego_1 = require("./Videojuego");
function arrayConSerie() {
    let series = [
        new Serie_1.Serie("Breaking Bad", 5, "Drama", "Vince Gilligan"),
        new Serie_1.Serie("Juego de Tronos", 8, undefined, " D.B. Weiss y David Benioff"),
        new Serie_1.Serie("Peaky Blinders", 6, "Crimen", "Steven Knight"),
        new Serie_1.Serie("Vikingos", undefined, "Historica", "Michael Hirst"),
        new Serie_1.Serie("La que se avecina", 15, "Comedia", "Laura Caballero y Alberto Caballero")
    ];
    return series;
}
function arrayConVideojuego() {
    let videojuegos = [
        new Videojuego_1.Videojuego("Resident Evil: Dead Aim", 67),
        new Videojuego_1.Videojuego("Animal Crossing", 123, "Sandbox", "Nintendo"),
        new Videojuego_1.Videojuego("Project Zomboid", 20),
        new Videojuego_1.Videojuego("Monster Hunter", 12),
        new Videojuego_1.Videojuego("inFamous", 50, "Sandbox", "Sucker Punch")
    ];
    return videojuegos;
}
function videojuegoMasLargo(videojuegos) {
    let contVid = 0;
    let masLargo = videojuegos[0];
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].isEntregado()) {
            contVid++;
        }
        if (!videojuegos[i].compareTo(masLargo)) {
            masLargo = videojuegos[i];
        }
    }
    console.log(masLargo.toString());
}
function serieConMasTemporadas(series) {
    let contSer = 0;
    let MasTemp = series[0];
    for (let i = 0; i < series.length; i++) {
        if (series[i].isEntregado()) {
            contSer++;
        }
        if (!series[i].compareTo(MasTemp)) {
            MasTemp = series[i];
        }
    }
    console.log(MasTemp.toString());
}
function verEntregados(series, videojuegos) {
    let seriesEntregadas = 0;
    let videojuegosEntregados = 0;
    for (let i = 0; i < series.length; i++) {
        if (series[i].isEntregado()) {
            seriesEntregadas++;
        }
        if (videojuegos[i].isEntregado()) {
            videojuegosEntregados++;
        }
    }
    console.log(("Numero de series entregadas: " + seriesEntregadas));
    console.log(("Numero de videojuegos entregados: " + videojuegosEntregados));
}
function ej1() {
    let series = arrayConSerie();
    let videojuegos = arrayConVideojuego();
    series[0].entregar();
    series[3].entregar();
    videojuegos[1].entregar();
    videojuegos[4].entregar();
    verEntregados(series, videojuegos);
    videojuegoMasLargo(videojuegos);
    serieConMasTemporadas(series);
}
exports.ej1 = ej1;
