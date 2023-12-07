export class Libro {
    
    private ISBN: string;
    private Titulo: string;
    private Autor: string;
    private num_paginas: number;

    constructor (iSBN: string ="", titulo: string ="", autor: string ="", num_paginas: number =0) {
        this.ISBN = iSBN;
        this.Titulo = titulo;
        this.Autor = autor;
        this.num_paginas = num_paginas;
    }
    
    public toString(): string {
        return ("El libro " + this.Titulo + " con el ISBN " + this.ISBN + " creado por " + this.Autor + " tiene " + this.num_paginas + " páginas.");
    }
    
    public getISBN(): string {
        return this.ISBN;
    }
    
    public setISBN(iSBN: string):void {
        this.ISBN = iSBN;
    }
    
    public getTitulo(): string {
        return this.Titulo;
    }
    
    public setTitulo(titulo: string):void {
        this.Titulo = titulo;
    }
    
    public getAutor(): string {
        return this.Autor;
    }
    
    public setAutor(autor: string):void {
        this.Autor = autor;
    }
    
    public getNum_paginas(): number {
        return this.num_paginas;
    }
    
    public setNum_paginas(num_paginas: number):void {
        this.num_paginas = num_paginas;
    }
    
    public comparar(libro: Libro):void {
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