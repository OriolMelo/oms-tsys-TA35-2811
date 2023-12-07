import {Serie} from "./Serie";
import {Videojuego} from "./Videojuego";

function arrayConSerie(): Serie[] {
    let series:Serie[] = 
        [
            new Serie("Breaking Bad", 5, "Drama", "Vince Gilligan"), 
            new Serie("Juego de Tronos", 8, undefined, " D.B. Weiss y David Benioff"),
            new Serie("Peaky Blinders", 6, "Crimen", "Steven Knight"),
            new Serie("Vikingos", undefined, "Historica", "Michael Hirst"),
            new Serie("La que se avecina", 15, "Comedia", "Laura Caballero y Alberto Caballero")
        ];
    
    return series;
}


function arrayConVideojuego(): Videojuego[] {
    let videojuegos: Videojuego[] = 
        [
            new Videojuego("Resident Evil: Dead Aim", 67),
            new Videojuego("Animal Crossing", 123, "Sandbox", "Nintendo"), 
            new Videojuego("Project Zomboid", 20),
            new Videojuego("Monster Hunter", 12),
            new Videojuego("inFamous", 50, "Sandbox", "Sucker Punch") 
        ];
    
    return videojuegos;
}

function videojuegoMasLargo(videojuegos: Videojuego[]):void {
    let contVid: number = 0;
    let masLargo: Videojuego = videojuegos[0];
    for (let i: number = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].isEntregado()) {
            contVid++;
        }
        if (!videojuegos[i].compareTo(masLargo)) {
            masLargo = videojuegos[i];
        }
        
    }
    console.log(masLargo.toString());
}

function serieConMasTemporadas(series: Serie[]):void {
    let contSer: number = 0;
    let MasTemp: Serie = series[0];
    for (let i: number = 0; i < series.length; i++) {
        if (series[i].isEntregado()) {
            contSer++;
        }
        if (!series[i].compareTo(MasTemp)) {
            MasTemp = series[i];
        }
        
    }
    
    console.log(MasTemp.toString());
}

function verEntregados(series:Serie[], videojuegos:Videojuego[]):void {
    
    let seriesEntregadas = 0;
    let videojuegosEntregados = 0;
    
    for(let i = 0; i < series.length; i++) {
        if(series[i].isEntregado()) {
            seriesEntregadas++;
        }
        if(videojuegos[i].isEntregado()) {
            videojuegosEntregados++;
        }
    }

    console.log(("Numero de series entregadas: " + seriesEntregadas));
    console.log(("Numero de videojuegos entregados: " + videojuegosEntregados));
}

export function ej1() {
    let series: Serie[] = arrayConSerie();
    let videojuegos: Videojuego[] = arrayConVideojuego();
    series[0].entregar();
    series[3].entregar();
    videojuegos[1].entregar();
    videojuegos[4].entregar();
    verEntregados(series, videojuegos);
    videojuegoMasLargo(videojuegos);
    serieConMasTemporadas(series);
}
