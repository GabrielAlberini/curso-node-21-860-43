import fs from "node:fs";

const FILMS_FILE = "database/films.json";
let films = [];

try {
  const data = fs.readFileSync(FILMS_FILE);
  films = JSON.parse(data);
} catch (error) {
  console.error("Error to parse data", error.message);
}

export { films, FILMS_FILE };
