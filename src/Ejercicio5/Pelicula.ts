export class Pelicula {
    
    private titulo: string;
    private duracion: number;
    private edad_minima: number;
    private director: string;
    
    private directores: string[] =["Adrian", "Ainara", "Asier", "Dani", "David", "Nayara", "Jordi", "Juanka", "Manel", "Marc", "Oriol", "Robert", "Alejandro", "Antoni", "Carla"];
    private peliculas: string[] =["La mejor peli", "Peli rara", "Obra maestra", "Empanadilla", "QUE MIEDO", "Triste"];

    private readonly EDAD_MINIMA: number = 3;
    private readonly EDAD_MAXIMA: number = 18;
    private readonly DURACION_MINIMA: number = 60;
    private readonly DURACION_MAXIMA: number = 180;
    
    constructor (titulo?: string | undefined, duracion?: number | undefined, edad_minima?: number | undefined, director?: string | undefined) {
        if(titulo == undefined){
            this.titulo = this.peliculas[this.generarAleatorio(0, (this.peliculas.length - 1))];
        }
        else {
            this.titulo= titulo;
        }
        if(duracion == undefined){
            this.duracion= this.generarAleatorio(this.DURACION_MINIMA, this.DURACION_MAXIMA);
        }
        else{
            this.duracion = duracion;
        }
        if(edad_minima == undefined){
            this.edad_minima = this.generarAleatorio(this.EDAD_MINIMA, this.EDAD_MAXIMA);
        }
        else{
            this.edad_minima = edad_minima;
        }
        if(director == undefined){
            this.director = this.directores[this.generarAleatorio(0, (this.directores.length - 1))];
        }
        else{
            this.director = director;
        }
    }
    
    public getEdad_minima(): number {
        return this.edad_minima;
    }
    
    public mostrar_pelicula(): void {
        console.log("Pelicula reproducida: " + this.titulo + "\nDuracion: " + this.duracion + "\nEdad minima: " + this.edad_minima + "\nDirector: " + this.director);
    }

    private generarAleatorio(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}