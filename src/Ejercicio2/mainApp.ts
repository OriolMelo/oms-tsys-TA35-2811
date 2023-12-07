import { Libro } from "./Libro";

export function ej2(){
    let libro1:Libro = new Libro("123456789", "Harry Potter", "Autor", 2);
    let libro2:Libro = new Libro("987654231", "Encanto", "Otro", 10);
    
    console.log(libro1.toString());
    console.log(libro2.toString());
    
    
    libro1.comparar(libro2);
}