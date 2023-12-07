"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    constructor(iSBN = "", titulo = "", autor = "", num_paginas = 0) {
        this.ISBN = iSBN;
        this.Titulo = titulo;
        this.Autor = autor;
        this.num_paginas = num_paginas;
    }
    toString() {
        return ("El libro " + this.Titulo + " con el ISBN " + this.ISBN + " creado por " + this.Autor + " tiene " + this.num_paginas + " páginas.");
    }
    getISBN() {
        return this.ISBN;
    }
    setISBN(iSBN) {
        this.ISBN = iSBN;
    }
    getTitulo() {
        return this.Titulo;
    }
    setTitulo(titulo) {
        this.Titulo = titulo;
    }
    getAutor() {
        return this.Autor;
    }
    setAutor(autor) {
        this.Autor = autor;
    }
    getNum_paginas() {
        return this.num_paginas;
    }
    setNum_paginas(num_paginas) {
        this.num_paginas = num_paginas;
    }
    comparar(libro) {
        if ((this.num_paginas > libro.num_paginas)) {
            console.log("El libro " + this.Titulo + " tiene más páginas");
        }
        else if ((this.num_paginas == libro.num_paginas)) {
            console.log("Ambos libros tienen las mismas páginas");
        }
        else {
            console.log("El libro " + libro.Titulo + " tiene más paginas");
        }
    }
}
exports.Libro = Libro;
