//simular una aplicación para administrar peliculas
//Netflix => funciones encargadas de manipular la información en una base de datos

let peliculas = []; // lista === array

const mostrarPeliculas = () => {
  console.log(peliculas);
};

// nombre | parametros | instrucciones
const agregarPelicula = (pelicula) => {
  peliculas.push(pelicula);
};

const buscarPelicula = (id) => {
  // for (let i = 0; i < peliculas.length; i++) {
  //   if (id === peliculas[i].id) {
  //     console.log(peliculas[i]);
  //   }
  // }

  // The find() method returns the first element in the provided array that satisfies the provided testing function

  const peliculaEncontrada = peliculas.find((pelicula) => pelicula.id === id);
  console.log(peliculaEncontrada);
  return peliculaEncontrada;
};

const eliminarPelicula = (id) => {
  peliculas = peliculas.filter((pelicula) => pelicula.id !== id);
};

module.exports = {
  peliculas,
  mostrarPeliculas,
  agregarPelicula,
  buscarPelicula,
  eliminarPelicula,
};
