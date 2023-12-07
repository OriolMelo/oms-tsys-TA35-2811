import { Asiento } from "./Asiento";
import { Espectador } from "./Espectador";
import { Pelicula } from "./Pelicula";

export class Cine {
    
    private pelicula: Pelicula;
    private precio_entrada: number;
    private asientos: Asiento[][];
    
    constructor (pelicula: Pelicula, precio_entrada: number, filas: number, columnas: number) {
        this.pelicula = pelicula;
        this.precio_entrada = precio_entrada;
        this.asientos = this.llenar_cine(filas, columnas);
    }
    
    public llenar_cine(filas: number, columnas: number): Asiento[][] {
        let sitios_totales:Asiento[][] = new Array(filas);
        for(let i: number = 0; i<filas; i++){
            sitios_totales[i] = new Array(columnas);
        }
        let fila: number = filas;
        for (let i: number = 0; i < filas; i++) {
            for (let j: number = 0; j < columnas; j++) {
                sitios_totales[i][j] = new Asiento(fila, (String.fromCharCode(65+j)));
            }
            
            fila--;
        }
        return sitios_totales;
    }
    
    public asiento_libre(fila: number, columna: number): boolean {
        return this.asientos[fila][columna].esta_libre();
    }
    
    public puede_sentarse(espectador: Espectador, fila: number, columna: number): boolean {
        return (espectador.puede_sentarse(this.precio_entrada, this.pelicula.getEdad_minima()) && this.asientos[fila][columna].esta_libre());
    }
    
    public sentarse(fila: number, columna: number, espectador: Espectador): void {
        this.asientos[fila][columna].ocupar_asiento(espectador);
    }
    
    public mostrar_cine(): void {
        this.pelicula.mostrar_pelicula();
        console.log(("Precio: " + this.precio_entrada));
        for (let i: number = 0; (i < this.asientos.length); i++) {
            for (let j: number = 0; (j < this.asientos[0].length); j++) {
                this.asientos[i][j].mostrar_asiento();
            }
            
        }
        
    }

}