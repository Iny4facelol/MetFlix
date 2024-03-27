import { peliculas } from "./data";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas(peliculas, {titulo: "Todas las películas"});
  pintarListaPeliculas(peliculas, {titulo: "Películas de aventura", filtro: {genero: "Aventuras", caracteristicas: "genero"}});
  pintarListaPeliculas(peliculas, {titulo: "Películas de animación", filtro: {genero: "Animacion", caracteristicas: "genero"}});
  pintarListaPeliculas(peliculas, {titulo: "Películas familiares", filtro: {genero: "Familiar", caracteristicas: "genero"}});
  pintarListaPeliculas(peliculas, {titulo: "Peliculas más vistas", filtro: {caracteristicas: "masVisto"}});
  pintarListaPeliculas(peliculas, {titulo: "Peliculas con mejor calificación en IMDb", filtro: {caracteristicas: "calificacion"}});
  pintarListaPeliculas(peliculas, {titulo: "Peliculas premiadas", filtro: {caracteristicas: "premio"}});
});