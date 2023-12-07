export class Raices {
    
    private a: number;
    private b: number;
    private c: number;
    
    private solucion1: number = 0;
    private solucion2: number = 0;

    constructor (a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getDiscriminante(): number {
        return (Math.pow(this.b, 2) - (4*(this.a*this.c)));
    }
    
    public tieneRaices(): boolean {
        return (this.getDiscriminante() > 0);
    }
    
    public tieneRaiz(): boolean {
        return (this.getDiscriminante() == 0);
    }
    
    public calcular(): void {
        if (this.tieneRaices()) {
            this.obtenerRaices();
        }
        else if (this.tieneRaiz()) {
            this.obtenerRaiz();
        }
        else {
            console.log("No tiene solución");
        }
        
    }
    
    public obtenerRaices(): void {
        this.solucion1 = ((this.b*-1) + Math.sqrt(this.getDiscriminante())) / (2*this.a);
        this.solucion2 = ((this.b*-1) - Math.sqrt(this.getDiscriminante())) / (2*this.a);
        console.log("Solución 1: " + this.solucion1);
        console.log("Solución 2: " + this.solucion2);
    }
    
    public obtenerRaiz(): void {
        let solucion: number = ((this.b*-1) / (2*this.a));
        console.log("La única solucion es: " + solucion);
    }
}