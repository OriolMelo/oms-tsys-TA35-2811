"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ej2 = void 0;
const Libro_1 = require("./Libro");
function ej2() {
    let libro1 = new Libro_1.Libro("123456789", "Harry Potter", "Autor", 2);
    let libro2 = new Libro_1.Libro("987654231", "Encanto", "Otro", 10);
    console.log(libro1.toString());
    console.log(libro2.toString());
    libro1.comparar(libro2);
}
exports.ej2 = ej2;
