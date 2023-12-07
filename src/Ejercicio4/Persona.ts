export abstract class Persona {
    
    private nombre: string;
    private edad: number;
    private sexo: string;
    
    constructor (nombre: string, edad: number, sexo: string){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    
    public getEdad(): number {
        return this.edad;
    }
    
    public setEdad(edad: number): void {
        this.edad = edad;
    }
    
    public getSexo(): string {
        return this.sexo;
    }
    
    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }
    
    public abstract registroAusencia(): void;
}