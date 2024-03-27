"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pintarListaPeliculas = void 0;
var model_1 = require("./model");
var constants_1 = require("./constants");
var motor_1 = require("./motor");
var agregarTitulo = function (tituloSeccion, contenedor) {
    var titulo = crearTitulo(tituloSeccion);
    contenedor.appendChild(titulo);
};
var crearTitulo = function (tituloSeccion) {
    var titulo = document.createElement('h2');
    titulo.textContent = tituloSeccion;
    return titulo;
};
var crearContenedor = function (nombreClase, contenedor) {
    var div = document.createElement("div");
    div.classList.add(nombreClase);
    div.id = nombreClase;
    contenedor.appendChild(div);
    return div;
};
var pintarFlechas = function (peliculaContenedor) {
    añadirFlecha(peliculaContenedor, "izquierda");
    añadirFlecha(peliculaContenedor, "derecha");
};
var pintarPelicula = function (pelicula, peliculaContenedor) {
    var divPelicula = crearContenedor(model_1.nombreClases.pelicula, peliculaContenedor);
    divPelicula.innerHTML = "\n    <img src=\"".concat(pelicula.imagen, "\" alt=\"").concat(pelicula.titulo, "\" />\n    <h3>").concat(pelicula.titulo, "</h3>\n    ");
};
var pintarPeliculas = function (peliculas, peliculaContenedor) {
    peliculas.forEach(function (pelicula) {
        pintarPelicula(pelicula, peliculaContenedor);
    });
};
var pintarListaPeliculas = function (listaPeliculas, configuracion) {
    //OBTENER EL DIV PRINCIPAL
    var appDiv = document.getElementById("principal");
    //COMPROBAR QUE EXISTE
    if (appDiv && appDiv instanceof HTMLDivElement) {
        //CREAR DIV PARA PELICULAS
        var crearDivPeliculas = crearContenedor(model_1.nombreClases.peliculas, appDiv);
        //CREAR TITULO
        agregarTitulo(configuracion.titulo, crearDivPeliculas);
        // DIV PARA LISTA DE PELICULAS 
        var divListaPeliculas = crearContenedor(model_1.nombreClases.listaPeliculas, crearDivPeliculas);
        //CREAR DIV CONTENEDOR PELICULAS 
        var divPeliculasContenedor = crearContenedor(model_1.nombreClases.peliculasContenedor, divListaPeliculas);
        //AÑADIR FLECHAS
        pintarFlechas(divPeliculasContenedor);
        var peliculasFiltradas = (0, motor_1.filtrarPeliculas)(listaPeliculas, configuracion.filtro);
        // AÑADIR PINTAR PELICULAS
        pintarPeliculas(peliculasFiltradas, divPeliculasContenedor);
    }
    else {
        console.error("No se encontró el elemento");
    }
    ;
};
exports.pintarListaPeliculas = pintarListaPeliculas;
var añadirFlecha = function (contenedor, tipo) {
    var divFlecha = document.createElement("div");
    divFlecha.className = "flecha-".concat(tipo);
    var imgFlecha = document.createElement("img");
    imgFlecha.src = tipo === "izquierda" ? constants_1.flechas.left : constants_1.flechas.right;
    divFlecha.appendChild(imgFlecha);
    divFlecha.addEventListener("click", function () {
        if (tipo === "izquierda") {
            contenedor.scrollBy({
                left: -contenedor.clientWidth,
                behavior: "smooth",
            });
        }
        else {
            contenedor.scrollBy({
                left: contenedor.clientWidth,
                behavior: "smooth",
            });
        }
    });
    contenedor.appendChild(divFlecha);
};
