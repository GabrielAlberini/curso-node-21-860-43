// node modules
import express from "express"; // framework => entorno de trabajo

const app = express(); // aplicaciones web

const pelicula = {
  titulo: "Titanic",
  director: "James Cameron",
  anio: 1914,
  id: "b85b8269-3930-477a-9f15-abe6c9358cca",
  imagen:
    "https://shatpod.com/movies/wp-content/uploads/Titanic-Movie-Poster-1997.jpg",
};

// localhost:3000/peliculas
// LLAMA A TODAS LAS PELICULAS
app.get("/peliculas", (request, response) => {
  response.send(pelicula);
  response.end();
});

// LLAMA A UNA PELICULA
app.get("/peliculas", (request, response) => {
  response.send(pelicula);
  response.end();
});

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});
