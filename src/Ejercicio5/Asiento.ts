import { Espectador } from "./Espectador";

export class Asiento {

    private fila: number;
    private columna: string;
    private ocupado: boolean;
    private espectador: Espectador | null;
    
    private OCUPADO_BASE: boolean = false;
    
    constructor (fila: number, columna: string) {
        this.fila = fila;
        this.columna = columna;
        this.ocupado = this.OCUPADO_BASE;
        this.espectador = null;
    }
    
    public ocupar_asiento(espectador: Espectador) {
        this.espectador = espectador;
        this.ocupado = true;
    }
    
    public esta_libre(): boolean {
        return !this.ocupado;
    }
    
    public mostrar_asiento() {
        if (this.ocupado) {
            console.log("Asiento " + this.fila + this.columna + " continene a " + this.espectador?.mostrar_espectador());
        }
        else {
            console.log("Asiento " + this.fila + this.columna + " está vacio");
        }
        
    }
}