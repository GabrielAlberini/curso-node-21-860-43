//Este es un comentario de una linea

/* 
Esto
es
un
comentario 
multi
linea
*/

//variable
//var | let | const -> 2015 ECMAscript
let nombre = "valor";

//Datos primitivos: acceden direcamente al valor
let cajaConNombre = "Gabriel"; //string
let cajaConNumero = 28; //number

console.log(cajaConNombre);
console.log(cajaConNumero);

//Datos complejos o compuestos: acceder al valor refenciando la posición
// array -> lista
let colores = ["azul", "rojo", "amarillo", "violeta"]; // rojo -> posición 1 | elemento 2

console.log(colores);

let primerProducto = "calefactor";
let segundoProducto = "televisor";
let tercerProducto = "kit de neopren";

console.log(primerProducto);
console.log(segundoProducto);
console.log(tercerProducto);

let ofertas = ["calefactor", "televisor", "kit de neopren"];

console.log(ofertas);

//objeto -> buscar una propiedad dentro de un objeto
let mate = ["bombilla", "mate de planta", "pie de metal"];

let mateObjeto = {
  bombilla: "metal",
  mate: "planta de mate",
  pie: "metal",
  yerbaQueUsa: "rosamonte",
};

let celular = {
  color: "negro",
  marca: "xiaomi",
  cantDeCamaras: 3,
  tieneCarcaza: "si",
};

console.log(mateObjeto);
console.log(celular);

let productos = [mateObjeto, celular];

console.log(productos);
