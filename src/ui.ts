import { Pelicula, nombreClases, TipoFlecha, ListaPeliculasConfiguracion } from "./model";
import { flechas } from "./constants";
import { filtrarPeliculas } from "./motor";


const agregarTitulo = (
    tituloSeccion: string,
    contenedor: HTMLDivElement,
) : void => {
    const titulo = crearTitulo(tituloSeccion);
    contenedor.appendChild(titulo);
}

const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
    const titulo = document.createElement('h2');
    titulo.textContent = tituloSeccion;
    return titulo;
}

const crearContenedor = (nombreClase: string, contenedor: HTMLDivElement): HTMLDivElement => {
    const div = document.createElement("div");
    div.classList.add(nombreClase);
    div.id = nombreClase;
    contenedor.appendChild(div);
    return div;
}

const pintarFlechas = (peliculaContenedor: HTMLDivElement) : void => {
    añadirFlecha(peliculaContenedor, "izquierda");
    añadirFlecha(peliculaContenedor, "derecha");
};

const pintarPelicula = (pelicula : Pelicula, peliculaContenedor: HTMLDivElement) : void => {
    const divPelicula = crearContenedor(nombreClases.pelicula, peliculaContenedor);
    divPelicula.innerHTML = `
    <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
    <h3>${pelicula.titulo}</h3>
    `;
};

const pintarPeliculas = (peliculas : Pelicula[], peliculaContenedor: HTMLDivElement): void => {
    peliculas.forEach((pelicula) => {
        pintarPelicula(pelicula, peliculaContenedor);
    });
}


export const pintarListaPeliculas = (
    listaPeliculas: Pelicula[],
    configuracion: ListaPeliculasConfiguracion,

): void => {
    //OBTENER EL DIV PRINCIPAL
    const appDiv = document.getElementById("principal")
    //COMPROBAR QUE EXISTE
    if (appDiv && appDiv instanceof HTMLDivElement) {
        //CREAR DIV PARA PELICULAS
        const crearDivPeliculas = crearContenedor(nombreClases.peliculas, appDiv);
        
        //CREAR TITULO
        agregarTitulo(configuracion.titulo, crearDivPeliculas);

        // DIV PARA LISTA DE PELICULAS 
        const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas, crearDivPeliculas);

        
        //CREAR DIV CONTENEDOR PELICULAS 
        const divPeliculasContenedor = crearContenedor(nombreClases.peliculasContenedor, divListaPeliculas)


        //AÑADIR FLECHAS
        pintarFlechas(divPeliculasContenedor);

        const peliculasFiltradas = filtrarPeliculas(listaPeliculas, configuracion.filtro);


        // AÑADIR PINTAR PELICULAS
        pintarPeliculas(peliculasFiltradas, divPeliculasContenedor);
    } else {
        console.error("No se encontró el elemento");
    };
};

const añadirFlecha = (
    contenedor: HTMLDivElement,
    tipo: TipoFlecha,
): void => {
    const divFlecha = document.createElement("div");
    divFlecha.className = `flecha-${tipo}`;
    const imgFlecha = document.createElement("img");
    imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
    divFlecha.appendChild(imgFlecha);
    divFlecha.addEventListener("click", () => {
        if (tipo === "izquierda") {
            contenedor.scrollBy({
                left: -contenedor.clientWidth,
                behavior: "smooth",
            });
        } else {
            contenedor.scrollBy({
                left: contenedor.clientWidth,
                behavior: "smooth",
            });
        }
    });
    contenedor.appendChild(divFlecha);
};

