import { films } from "../services/index.js";
import fs from "node:fs";
import { FILMS_FILE } from "../services/index.js";

/**
 * Get films
 * @param {*} req
 * @param {*} res
 */

export const getItems = (req, res) => {
  res.json(films);
};

/**
 * Get film
 * @param {*} req
 * @param {*} res
 */

export const getItem = (req, res) => {
  const id = req.params.id;
  const film = films.find((f) => +f.id === +id);
  if (!film) res.send("Film not exsist");
  res.json(film);
};

/**
 * Create film
 * @param {*} req
 * @param {*} res
 */

export const createItem = (req, res) => {
  const film = req.body;
  film.id = Math.floor(Math.random() * 1000000);
  films.push(film);
  fs.writeFile(FILMS_FILE, JSON.stringify(films), (err) => {
    console.log(err);
  });
  res.json(film);
};

/**
 * Delete film
 * @param {*} req
 * @param {*} res
 */

// http://localhost:3000/api/films/1920381928
export const deleteItem = (req, res) => {
  const id = req.params.id;
  // findIndex => devuelve la posición de ese elemento, si no está, me devuelve -1
  const index = films.findIndex((f) => +f.id === +id);
  if (index === -1) res.sendStatus(404);

  films.splice(index, 1);

  fs.writeFile(FILMS_FILE, JSON.stringify(films), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error to deleted film");
    } else {
      res.send("Deleted film OK");
    }
  });
};

/**
 * Update film
 * @param {*} req
 * @param {*} res
 */

export const updateItem = (req, res) => {
  const id = req.params.id;
  const newFilm = req.body;

  for (let film of films) {
    if (Number(film.id) === Number(id)) {
      film.title = newFilm.title;
      film.director = newFilm.director;
      film.year = newFilm.year;
      film.image = newFilm.image;
    }
  }

  fs.writeFile(FILMS_FILE, JSON.stringify(films), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error to update film");
    } else {
      res.json(films);
    }
  });
};
