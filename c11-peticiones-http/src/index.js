// node modules
import express, { response } from "express"; // framework => entorno de trabajo

// FILE SYSTEM
import fs from "node:fs"; // los módulo que provengan de node ahora se anticipan con "node:"
// import test from "node:test"; // módulo test pide "node:" de forma obligatoria

const app = express(); // aplicaciones web

app.use(express.json());

const PELICULAS_FILE = "database/peliculas.json";

let peliculas = [];

try {
  const data = fs.readFileSync(PELICULAS_FILE);
  peliculas = JSON.parse(data);
} catch (error) {
  console.error(error);
}

// localhost:3000/peliculas
// LLAMA A TODAS LAS PELICULAS
app.get("/peliculas", (request, response) => {
  response.json(peliculas);
});

// LLAMA A UNA PELICULA
// parámetros en las peticiones son endpoints dinámicos
app.get("/peliculas/:id", (request, response) => {
  const id = request.params.id;
  const peliculaEncontrada = peliculas.find((pelicula) => pelicula.id === id);

  if (peliculaEncontrada === undefined) {
    response.status(404).send("Pelicula no encontrada :(");
  }

  response.json(peliculaEncontrada);
});

app.delete("/peliculas/:id", (request, response) => {
  const id = request.params.id;

  peliculas = peliculas.filter((pelicula) => pelicula.id !== id);

  fs.writeFile(PELICULAS_FILE, JSON.stringify(peliculas), (err) => {
    if (err) {
      console.error(err);
      return response.status(406).send("No se pudo eliminar la película");
    }
    response.send("Pelicula borrada correctamente");
  });
}); // parámetros: 1-endpoint 2-callback

app.listen(3001, () => {
  console.log("Servidor iniciado en http://localhost:3001");
});
