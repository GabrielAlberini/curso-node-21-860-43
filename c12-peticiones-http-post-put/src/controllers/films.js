import { peliculas } from "../../services/index.js";

const getAllFilms = (request, response) => {
  response.json(peliculas);
};

const getFilm = (request, response) => {
  const id = request.params.id;

  const peliculaEncontrada = peliculas.find(
    (pelicula) => Number(pelicula.id) === Number(id)
  );

  if (!peliculaEncontrada) {
    response.status(404).send("Pelicula no encontrada :(");
  }

  response.json(peliculaEncontrada);
};

const createNewFilm = (request, response) => {
  const pelicula = request.body;
  pelicula.id = Math.floor(Math.random() * 1000000);

  const peliculaExiste = peliculas.find((p) => p.id === pelicula.id);

  if (peliculaExiste) response.status(400).send("La pelicula ya existe");

  peliculas.push(pelicula);

  fs.writeFile(PELICULAS_FILE, JSON.stringify(peliculas), (error) => {
    if (error) {
      console.log(error);
      return response.status(400).send("No se pudo guardar la pelicula");
    }
    response.json(pelicula);
  });
};

const updateFilm = () => {};

const deleteFilm = (request, response) => {
  const id = request.params.id;

  peliculas = peliculas.filter((pelicula) => pelicula.id !== id);

  fs.writeFile(PELICULAS_FILE, JSON.stringify(peliculas), (err) => {
    if (err) {
      console.error(err);
      return response.status(406).send("No se pudo eliminar la película");
    }
    response.send("Pelicula borrada correctamente");
  });
};

export { getAllFilms, getFilm, createNewFilm, updateFilm, deleteFilm };
