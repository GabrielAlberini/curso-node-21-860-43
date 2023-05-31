import express from "express";
import { PORT } from "./config/index.js";
import { dbConnect } from "./db/mongo.js";

import {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} from "./controllers/films.js";

const app = express();
app.use(express.json());

const port = PORT;

// Get all films
app.get("/api/films", getItems);

//Get film
app.get("/api/films/:id", getItem);

//Create new film
app.post("/api/films", createItem);

//Delete film
app.delete("/api/films/:id", deleteItem);

//Update film
app.put("/api/films/:id", updateItem);

app.listen(port, () => {
  console.log(`Server on ${port}`);
});

dbConnect();
