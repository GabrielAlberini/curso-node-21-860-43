import express from "express";

import {
  getItems,
  getItem,
  createItem,
  deleteFilm,
  updateFilm,
} from "./controllers/films.js";

const app = express();

app.use(express.json());

const port = 3000;

// Get all films
app.get("/api/films", getItems);

//Get film
app.get("/api/films/:id", getItem);

//Create new film
app.post("/api/films", createItem);

//Delete film
app.delete("/api/films/:id", deleteFilm);

//Update film
app.put("/api/films/:id", updateFilm);

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
