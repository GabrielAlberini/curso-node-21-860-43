const {
  peliculas,
  mostrarPeliculas,
  agregarPelicula,
  buscarPelicula,
  eliminarPelicula,
} = require("./api.js");

const pelicula1 = {
  id: 1,
  nombre: "Titanic",
  raiting: "5 estrellas",
  duracion: 7000,
};

const pelicula2 = {
  id: 2,
  nombre: "Rambo",
  raiting: "4 estrellas",
  duracion: "",
};

const pelicula3 = {
  id: 3,
  nombre: "E.T",
  raiting: "3 estrellas",
  duracion: 6700,
};

// agregar pelicula
agregarPelicula(pelicula1);
agregarPelicula(pelicula2);
agregarPelicula(pelicula3);

// console.log(peliculas);

// invocando función => paso de dato a utilizar
// buscando pelicula
buscarPelicula(2);

// mostrando pelicula
mostrarPeliculas();

// eliminando pelicula
eliminarPelicula(1);

mostrarPeliculas();
