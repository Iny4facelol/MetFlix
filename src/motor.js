"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarPeliculas = exports.filtrarPeliculasPorCalificacion = exports.filtrarPeliculasPorMasVisto = exports.filtrarPeliculasPorPremio = exports.filtrarPeliculasPorGenero = void 0;
var filtrarPeliculasPorGenero = function (peliculas, genero) { return peliculas.filter(function (peliculas) { return peliculas.genero === genero; }); };
exports.filtrarPeliculasPorGenero = filtrarPeliculasPorGenero;
var filtrarPeliculasPorPremio = function (peliculas) { return peliculas.filter(function (peliculas) { return peliculas.premioGalardon; }); };
exports.filtrarPeliculasPorPremio = filtrarPeliculasPorPremio;
var filtrarPeliculasPorMasVisto = function (peliculas) { return peliculas.filter(function (peliculas) { return peliculas.masVisto; }); };
exports.filtrarPeliculasPorMasVisto = filtrarPeliculasPorMasVisto;
var filtrarPeliculasPorCalificacion = function (peliculas) { return peliculas.sort(function (a, b) { return b.calificacionImdb - a.calificacionImdb; }); };
exports.filtrarPeliculasPorCalificacion = filtrarPeliculasPorCalificacion;
var filtrarPeliculas = function (peliculas, filtro) {
    if (!filtro)
        return peliculas;
    switch (filtro.caracteristicas) {
        case 'genero':
            return (0, exports.filtrarPeliculasPorGenero)(peliculas, filtro.genero);
        case "premio":
            return (0, exports.filtrarPeliculasPorPremio)(peliculas);
        case "masVisto":
            return (0, exports.filtrarPeliculasPorMasVisto)(peliculas);
        case "calificacion":
            return (0, exports.filtrarPeliculasPorCalificacion)(peliculas);
        default:
            return peliculas;
    }
    ;
};
exports.filtrarPeliculas = filtrarPeliculas;
