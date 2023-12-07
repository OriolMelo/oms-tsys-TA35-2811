import { Entregable } from "./Entregable";

export class Serie implements Entregable {
    
    private titulo: string;
    private num_temporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    constructor (titulo: string, num_temporadas:number =3, genero: string ="", creador: string) {
        this.titulo = titulo;
        this.num_temporadas = num_temporadas;
        this.entregado = false;
        this.genero = genero;
        this.creador = creador;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    
    public getNum_temporadas(): number {
        return this.num_temporadas;
    }
    
    public setNum_temporadas(num_temporadas: number): void {
        this.num_temporadas = num_temporadas;
    }
    
    public getGenero(): string {
        return this.genero;
    }
    
    public setGenero(genero: string): void {
        this.genero = genero;
    }
    
    public getCreador(): string {
        return this.creador;
    }
    
    public setCreador(creador: string): void {
        this.creador = creador;
    }
    
    public toString(): string {
        return ("Serie [titulo=" + this.titulo + ", numTemporadas=" + this.num_temporadas + ", entregado=" + 
                this.entregado + ", genero=" + this.genero + ", creador=" + this.creador + "]");
    }
    
    public entregar(): void {
        this.entregado = true;
    }
    
    public devolver(): void {
        this.entregado = true;
    }
    
    public isEntregado(): boolean {
        return this.entregado;
    }
    
    public compareTo(a: Entregable): boolean {
        let esMasLargo: boolean = false;
        if (this.num_temporadas < (a as Serie).getNum_temporadas()) {
            esMasLargo = true;
        }
        
        return esMasLargo;
    }
}