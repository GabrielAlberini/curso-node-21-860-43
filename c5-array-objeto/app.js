// palabra reservada | nombre | valor
//   let     const

// datos primitivos => representaban directamente al valor
// declarar | asignar
let caja = "lapices"; // string
let cajaDeNumeros = 289347928; // number
let cajaDeBooleano = false; // boolean

//datos complejos/compuestos
//array => lista: listar y ordenar
let cajaDeColores = ["rojo", "azul", "amarillo"];
// en los arrays el orden comienza por 0 y tiene x cantidad de elementos

//objetos => se accede a la propiedad
let celular = {
  color: "negro",
  cantidadDeCamaras: 3,
};

// invocación de función
// cajaDeColores();

// array => accediendo al valor mediante su posición
// console.log(cajaDeColores[3]);

// objeto => acceder a propiedad mediante
// let propiedad = "cantidadDeCamaras";
// notación de corchetes
// console.log(celular[propiedad]);

// notación de puntos
// console.log(celular.propiedad);

// función = acción
// validar que un objeto tenga cierta propiedad o no
// palabra reservada | nombre | parametros | arrow | instrucciones

//            parametros se declaran
// const validadPropiedad = (obj, prop) => {};

let clima = "nublado";

// la condición siempre tiene que dar true
// if (clima === "nublado") {
//   console.log("Llevate paraguas");
// } else {
//   console.log("No te preocupes, está soleado");
// }

// = asignación
// == comparación
// === comparación estricta
// !== diferente

const auto = {
  puertas: 4,
  color: "amarillo",
  baul: true,
  bocina: false,
  usado: true,
};

const validadPropiedad = (obj, prop) => {
  //   false
  if (obj[prop]) {
    console.log("Existe");
  } else {
    console.log("No existe");
  }
};

validadPropiedad(auto, "luces");
