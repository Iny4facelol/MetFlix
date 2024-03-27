"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var ui_1 = require("./ui");
document.addEventListener("DOMContentLoaded", function () {
    (0, ui_1.pintarListaPeliculas)(data_1.peliculas, { titulo: "Todas las películas" });
    (0, ui_1.pintarListaPeliculas)(data_1.peliculas, { titulo: "Películas de aventura", filtro: { genero: "Aventuras", caracteristicas: "genero" } });
    (0, ui_1.pintarListaPeliculas)(data_1.peliculas, { titulo: "Películas de animación", filtro: { genero: "Animacion", caracteristicas: "genero" } });
    (0, ui_1.pintarListaPeliculas)(data_1.peliculas, { titulo: "Películas familiares", filtro: { genero: "Familiar", caracteristicas: "genero" } });
    (0, ui_1.pintarListaPeliculas)(data_1.peliculas, { titulo: "Peliculas más vistas", filtro: { caracteristicas: "masVisto" } });
    (0, ui_1.pintarListaPeliculas)(data_1.peliculas, { titulo: "Peliculas con mejor calificación en IMDb", filtro: { caracteristicas: "calificacion" } });
    (0, ui_1.pintarListaPeliculas)(data_1.peliculas, { titulo: "Peliculas premiadas", filtro: { caracteristicas: "premio" } });
});
