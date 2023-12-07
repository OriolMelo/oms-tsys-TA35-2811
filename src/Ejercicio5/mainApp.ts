import { Cine } from "./Cine";
import { Espectador } from "./Espectador";
import { Pelicula } from "./Pelicula";

function generarAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function ej5(){
    let peli: Pelicula = new Pelicula();
    let precio: number = generarAleatorio(1, 30);
    let filas: number = 8;
    let columnas: number = 9;
    let cine: Cine = new Cine(peli, precio, filas, columnas);
    let espectadores: number = generarAleatorio(1, (filas*columnas));
    let espectadores_anadidos: number = 0;
    
    while (espectadores_anadidos < espectadores) {
        let esp: Espectador = new Espectador();
        let fila_espectador: number = 0;
        let columna_espectador: number = 0;
        do {
            fila_espectador = generarAleatorio(0, filas-1);
            columna_espectador = generarAleatorio(0, columnas-1);
        } while (!cine.asiento_libre(fila_espectador, columna_espectador)); 
        
        if (cine.puede_sentarse(esp, fila_espectador, columna_espectador)) {
            cine.sentarse(fila_espectador, columna_espectador, esp);
        }
        
        espectadores_anadidos++;
    }
    
    cine.mostrar_cine();
}