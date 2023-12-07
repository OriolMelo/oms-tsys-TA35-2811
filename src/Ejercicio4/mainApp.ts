import { Aula } from "./Aula"
import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

function random(max:number): number {
    return Math.floor(Math.random()*max);
}

export function ej4(){
    let profesor: Profesor = new Profesor("Hanna", 43, 'F');
    let aula: Aula = new Aula(3, 4, "filosofia", profesor);
    
    let nombres: string[] = ["Hanna", "Marc", "Anna"];
    let genero: string[] = ["M", "F"];
    
    for(let i=0; i<aula.getMaximoEstudiantes(); i++){
        let estudiante: Estudiante = new Estudiante(nombres[i%3], random(5)+18, genero[random(2)], random(11));
        aula.anadirEstudiante(estudiante);
    }

    if(aula.puedeDarClase()){
        console.log("Puede dar clase");
        aula.sacarNotas();
    }
    else{
        console.log("No puede dar clase");
    }
}