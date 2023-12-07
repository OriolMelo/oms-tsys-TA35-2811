"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
class Pelicula {
    constructor(titulo, duracion, edad_minima, director) {
        this.directores = ["Adrian", "Ainara", "Asier", "Dani", "David", "Nayara", "Jordi", "Juanka", "Manel", "Marc", "Oriol", "Robert", "Alejandro", "Antoni", "Carla"];
        this.peliculas = ["La mejor peli", "Peli rara", "Obra maestra", "Empanadilla", "QUE MIEDO", "Triste"];
        this.EDAD_MINIMA = 3;
        this.EDAD_MAXIMA = 18;
        this.DURACION_MINIMA = 60;
        this.DURACION_MAXIMA = 180;
        if (titulo == undefined) {
            this.titulo = this.peliculas[this.generarAleatorio(0, (this.peliculas.length - 1))];
        }
        else {
            this.titulo = titulo;
        }
        if (duracion == undefined) {
            this.duracion = this.generarAleatorio(this.DURACION_MINIMA, this.DURACION_MAXIMA);
        }
        else {
            this.duracion = duracion;
        }
        if (edad_minima == undefined) {
            this.edad_minima = this.generarAleatorio(this.EDAD_MINIMA, this.EDAD_MAXIMA);
        }
        else {
            this.edad_minima = edad_minima;
        }
        if (director == undefined) {
            this.director = this.directores[this.generarAleatorio(0, (this.directores.length - 1))];
        }
        else {
            this.director = director;
        }
    }
    getEdad_minima() {
        return this.edad_minima;
    }
    mostrar_pelicula() {
        console.log("Pelicula reproducida: " + this.titulo + "\nDuracion: " + this.duracion + "\nEdad minima: " + this.edad_minima + "\nDirector: " + this.director);
    }
    generarAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
exports.Pelicula = Pelicula;
