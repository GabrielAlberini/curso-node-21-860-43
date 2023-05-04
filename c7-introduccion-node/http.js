// requerir un módulo => http
const http = require("http");

// callback => función que se ejecuta cuando pasa algo
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hola Mundo!");
});

const puerto = 80;

servidor.listen(puerto, () => {
  console.log(`El servidor está corriendo en el puerto ${puerto}`);
});
