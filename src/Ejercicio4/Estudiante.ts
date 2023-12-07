import {Persona} from "./Persona";

export class Estudiante extends Persona {
    
    private calificacion: number;
    
    private disponible: boolean;
    
    constructor (nombre: string, edad: number, sexo: string, calificacion: number) {
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
        this.disponible = this.registroAusencia();
    }
    
    public getCalificacion(): number {
        return this.calificacion;
    }
    
    public setCalificacion(calificacion: number): void {
        this.calificacion = calificacion;
    }
    
    private nextInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    public registroAusencia(): boolean {
        let randomNumber: number = this.nextInt(101);
        let disp = true;
        if ((randomNumber < 50)) {
            disp = false;;
        }
        return disp;
    }

    public isDisponible(): boolean {
        return this.disponible;
    }
}