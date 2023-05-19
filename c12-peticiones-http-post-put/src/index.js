// node modules
import express from "express"; // framework => entorno de trabajo => aplicaciones web

// FILE SYSTEM
import {
  createNewFilm,
  deleteFilm,
  getAllFilms,
  getFilm,
} from "./controllers/films.js";

const app = express(); // aplicacion web

app.use(express.json());

// GET POST PUT DELETE => tipos de peticiones a una base de datos
// push() => método que agrega elemento a un array

app.get("/peliculas", getAllFilms);
app.get("/peliculas/:id", getFilm);
app.post("/peliculas", createNewFilm);
app.delete("/peliculas/:id", deleteFilm);

app.listen(3001, () => {
  console.log("Servidor iniciado en http://localhost:3001");
});
