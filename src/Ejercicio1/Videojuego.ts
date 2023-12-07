import { Entregable } from "./Entregable";

export class Videojuego implements Entregable {
    
    private titulo: string;
    private horas_estimadas: number;
    private entregado: boolean;
    private genero: string;
    private company: string;
    
    constructor (titulo: string = "", horas_estimadas: number = 10, genero: string = "", company: string ="") {
        this.titulo = titulo;
        this.horas_estimadas = horas_estimadas;
        this.entregado = false;
        this.genero = genero;
        this.company = company;
    }
    
    public getTitulo(): string {
        return this.titulo;
    }
    
    // getters y setters
    public getHorasEstimadas(): number {
        return this.horas_estimadas;
    }
    
    public getGenero(): string {
        return this.genero;
    }
    
    public getCompany(): string {
        return this.company;
    }
    
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    
    public setHorasEstimadas(horas_estimadas: number): void {
        this.horas_estimadas = horas_estimadas;
    }
    
    public setGenero(genero: string): void {
        this.genero = genero;
    }
    
    public setCompany(company: string): void {
        this.company = company;
    }
    
    public toString(): string {
        return ("Videojuego [titulo=" + this.titulo + ", horasEstimadas=" + this.horas_estimadas + ", entregado=" + 
                this.entregado + ", genero=" + this.genero + ", company=" + this.company + "]");
    }
    
    public compareTo(a: Entregable): boolean {
        let esMasLargo: boolean = false;
        if ((this.horas_estimadas < (a as Videojuego).getHorasEstimadas())) {
            esMasLargo = true;
        }
        
        return esMasLargo;
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
}