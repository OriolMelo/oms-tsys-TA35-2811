"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espectador = void 0;
class Espectador {
    constructor(nombre, edad, dinero) {
        this.EDAD_MINIMA = 3;
        this.EDAD_MAXIMA = 99;
        this.DINERO_MINIMO = 0;
        this.DINERO_MAXIMO = 50;
        this.nombres = ["Adrian", "Ainara", "Asier", "Dani", "David", "Nayara", "Jordi", "Juanka", "Manel", "Marc", "Oriol", "Robert", "Alejandro", "Antoni", "Carla"];
        if (nombre == undefined) {
            this.nombre = this.nombres[this.generarAleatorio(0, (this.nombres.length - 1))];
        }
        else {
            this.nombre = nombre;
        }
        if (edad == undefined) {
            this.edad = this.generarAleatorio(this.EDAD_MINIMA, this.EDAD_MAXIMA);
        }
        else {
            this.edad = edad;
        }
        if (dinero == undefined) {
            this.dinero = this.generarAleatorio(this.DINERO_MINIMO, this.DINERO_MAXIMO);
        }
        else {
            this.dinero = dinero;
        }
    }
    puede_sentarse(precio_entrada, edad_requerida) {
        return (this.dinero >= precio_entrada && this.edad >= edad_requerida);
    }
    mostrar_espectador() {
        return (this.nombre + ", de edad " + this.edad + " y con " + this.dinero + " euros");
    }
    generarAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
exports.Espectador = Espectador;
