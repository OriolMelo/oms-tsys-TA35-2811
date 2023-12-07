import { Profesor } from "./Profesor";
import { Estudiante } from "./Estudiante";

export class Aula {
    
    private identificador: number;
    
    private maximoEstudiantes: number;
    
    private materia: string;
    
    private profesor: Profesor;
    
    private estudiantes: Estudiante[] = [];
    
    constructor (identificador: number, maximoEstudiantes: number, materia: string, profesor: Profesor) {
        this.identificador = identificador;
        this.maximoEstudiantes = maximoEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
    }

    public getMaximoEstudiantes(): number {
        return this.maximoEstudiantes;
    }
    
    public puedeDarClase(): boolean {
        return (this.profesor.getMateria() === this.materia && this.profesor.isDisponible() && this.mayoriaAsistenciaEstudiantes())
    }
    
    public anadirEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

    public mayoriaAsistenciaEstudiantes(): boolean {
        let calcularEstudiantes: number = 0;
        for (let i: number = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].isDisponible()) {
                calcularEstudiantes++;
            }
        }

        let mayoria_presente: boolean = false;
        if ((calcularEstudiantes > this.estudiantes.length/2)) {
            mayoria_presente = true;
        }
        return mayoria_presente;
    }
    
    public sacarNotas(): void {
        let contadorChicos: number = 0;
        let contadorChicas: number = 0;
        for (let i: number = 0; i < this.estudiantes.length; i++) {
            if ((this.estudiantes[i].getCalificacion() >= 5)) {
                if ((this.estudiantes[i].getSexo() == 'M')) {
                    contadorChicos++;
                }
                else if ((this.estudiantes[i].getSexo() == 'F')) {
                    contadorChicas++;
                }
            }
        }
        
        console.log("Hay " + contadorChicos + " chicos aprobados y " + contadorChicas + " chicas aprobadas");
    }
}