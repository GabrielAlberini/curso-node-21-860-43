const shortid = require("shortid");

const peliculas = [
  {
    id: shortid.generate(),
    nombre: "Titanic",
    director: "James Cameron",
  },
  {
    id: shortid.generate(),
    nombre: "E.T",
    director: "Steven Spielberg",
  },
];

console.log(peliculas);

module.exports = peliculas;
