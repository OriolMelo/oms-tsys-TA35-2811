import {Persona} from "./Persona";

export class Profesor extends Persona{

    private materia: string;
    private disponible: boolean;
    
    constructor (nombre: string, edad: number, sexo: string){
        super(nombre, edad, sexo);
        this.materia = this.listaMateria();
        this.disponible = this.registroAusencia();
    }
    
    public getMateria(): string {
        return this.materia;
    }
    
    public setMateria(materia: string): void {
        this.materia = materia;
    }

    private nextInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
    
    public registroAusencia(): boolean {
        let randomNumber: number = this.nextInt(101);
        let disp = true;
        if ((randomNumber < 20)) {
            disp = false;;
        }
        return disp;
    }
    
    public listaMateria(): string {
        
        let materias: string[] = ["matematicas", "filosofia", "fisica"];
        
        return materias[this.nextInt(3)];
    }
    
    public isDisponible(): boolean {
        return this.disponible;
    }
    
    public setDisponible(disponible: boolean) {
        this.disponible = disponible;
    }

}