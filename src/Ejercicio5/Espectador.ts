export class Espectador {
    
    private readonly EDAD_MINIMA: number = 3;
    private readonly EDAD_MAXIMA: number = 99;
    private readonly DINERO_MINIMO: number = 0;
    private readonly DINERO_MAXIMO: number = 50;

    private nombres: string[] =["Adrian", "Ainara", "Asier", "Dani", "David", "Nayara", "Jordi", "Juanka", "Manel", "Marc", "Oriol", "Robert", "Alejandro", "Antoni", "Carla"];
    private nombre: string;
    private edad: number;
    private dinero: number;

    constructor (nombre?: string | undefined, edad?: number | undefined, dinero?: number | undefined) {
        if(nombre == undefined){
            this.nombre = this.nombres[this.generarAleatorio(0, (this.nombres.length - 1))];
        }
        else {
            this.nombre= nombre;
        }
        if(edad == undefined){
            this.edad = this.generarAleatorio(this.EDAD_MINIMA, this.EDAD_MAXIMA);
        }
        else{
            this.edad = edad;
        }
        if(dinero == undefined){
            this.dinero = this.generarAleatorio(this.DINERO_MINIMO, this.DINERO_MAXIMO);
        }
        else{
            this.dinero = dinero;
        }
    }
    
    public puede_sentarse(precio_entrada: number, edad_requerida: number): boolean {
        return (this.dinero >= precio_entrada && this.edad >= edad_requerida);
    }
    
    public mostrar_espectador(): string {
        return (this.nombre + ", de edad " + this.edad + " y con " + this.dinero + " euros");
    }
    
    private generarAleatorio(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}