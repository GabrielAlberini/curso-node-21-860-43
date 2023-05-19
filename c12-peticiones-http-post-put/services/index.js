import fs from "node:fs";

const PELICULAS_FILE = "database/peliculas.json";
let peliculas = [];

try {
  const data = fs.readFileSync(PELICULAS_FILE);
  peliculas = JSON.parse(data);
} catch (error) {
  console.error(error);
}

export { peliculas };
