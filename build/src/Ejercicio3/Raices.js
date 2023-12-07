"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raices = void 0;
class Raices {
    constructor(a, b, c) {
        this.solucion1 = 0;
        this.solucion2 = 0;
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminante() {
        return (Math.pow(this.b, 2) - (4 * (this.a * this.c)));
    }
    tieneRaices() {
        return (this.getDiscriminante() > 0);
    }
    tieneRaiz() {
        return (this.getDiscriminante() == 0);
    }
    calcular() {
        if (this.tieneRaices()) {
            this.obtenerRaices();
        }
        else if (this.tieneRaiz()) {
            this.obtenerRaiz();
        }
        else {
            console.log("No tiene solución");
        }
    }
    obtenerRaices() {
        this.solucion1 = ((this.b * -1) + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        this.solucion2 = ((this.b * -1) - Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        console.log("Solución 1: " + this.solucion1);
        console.log("Solución 2: " + this.solucion2);
    }
    obtenerRaiz() {
        let solucion = ((this.b * -1) / (2 * this.a));
        console.log("La única solucion es: " + solucion);
    }
}
exports.Raices = Raices;
