
import { FiltroPeliculas, Pelicula, TipoGenero } from "./model";


export const filtrarPeliculasPorGenero = (
    peliculas: Pelicula[], genero?: TipoGenero) : Pelicula[] => peliculas.filter((peliculas) => peliculas.genero === genero);


export const filtrarPeliculasPorPremio = (peliculas: Pelicula[]): Pelicula[] => peliculas.filter((peliculas) => peliculas.premioGalardon);    

export const filtrarPeliculasPorMasVisto = (peliculas: Pelicula[]) : Pelicula[] => peliculas.filter((peliculas) => peliculas.masVisto);

export const filtrarPeliculasPorCalificacion = (peliculas: Pelicula[]) : Pelicula[] => peliculas.sort((a, b) => b.calificacionImdb - a.calificacionImdb);

export const filtrarPeliculas = (peliculas: Pelicula[], filtro?: FiltroPeliculas): Pelicula[] => {
    if(!filtro) return peliculas;
    
    switch(filtro.caracteristicas){
        case 'genero':
            return filtrarPeliculasPorGenero(peliculas, filtro.genero);
        case "premio": 
            return filtrarPeliculasPorPremio(peliculas);
        case "masVisto": 
            return filtrarPeliculasPorMasVisto(peliculas);
        case "calificacion": 
            return filtrarPeliculasPorCalificacion(peliculas);
        default: 
            return peliculas;    

    };
};





