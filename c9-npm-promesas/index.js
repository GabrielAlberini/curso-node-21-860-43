const peliculas = require("./api.js");
const os = require("os");
const shortid = require("shortid");
const colors = require("colors");

// console.log(os.platform()); // nombre de sistema operativo
// console.log(os.version()); // versión de sistema operativo

console.log(shortid.generate().bgBlue);
console.log(shortid.generate().bgMagenta);
console.log(shortid.generate().bgCyan);
console.log(shortid.generate().bgGreen);
