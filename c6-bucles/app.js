//bucles => ciclos que se ejecutan siempre que una condición sea true

//Ejemplo de condición a true en condicional if
if (3 < 1) {
  console.log("Es mayor");
}

//sintaxis => palabra reservada | variable inicial | condición | incremento o decremento
// if
// function
// arrow function => const comer = () => {}

// index => i
//   inicio | condicion (true) | incremento o decremento
for (let i = 0; i <= 10; i = i + 1) {
  // console.log(i);
}

//array => posiciones
const colores = ["lila", "naranja", "azul"];

// objetos => keys => propiedades
const celular = {
  color: "negro",
  camaras: 3,
  "5g": false,
};

//recorriendo array
//   inicio | condicion (true) | incremento o decremento
for (let i = 0; i < 3; i = i + 1) {
  // console.log(`En la vuelta número ${i + 1} se encuenta ${colores[i]}`);
}

//intepolar
("jh4j5h6jg'fl5b90ihin46kyun,l23'¿32'¿5npp546y.ñrew-4");
("345g3g4594v50yo450yolkrkjhk43jh3nc ${}"); //back stick

//template string
// console.log(`4oi56u54vn48nh4t34n4mh ${1 + 2}`);

const ofertas = [
  "termo",
  "kit de belleza",
  "aire acondicionado",
  "televisor",
  "colchón",
  "carpa",
  "celular",
  "escritorio",
  "mesita de luz",
  "olla essen",
  "mouse",
];

//                        10
for (let i = 0; i < ofertas.length; i++) {
  // console.log(`En la vuelta numero ${i + 1} se encuentra el ${ofertas[i]}`);
}

// console.log(ofertas.length); // longitud

// let numero = 3;
// while (numero >= 1) {
//   console.log(numero);

//   numero--;
// }

// for
// while
// do while
// for in
// for of

// const ofertas = ["termo", "kit de belleza"];

const ofertas2 = [
  {
    nombre: "termo",
    precio: 2212,
    color: "rojo",
  },
  {
    nombre: "kit de belleza",
    precio: 12212,
    color: "azul",
  },
];

for (let i = 0; i < ofertas2.length; i++) {
  // console.log(`
  //   En la vuelta número ${i + 1} se encuentra el ${
  //   ofertas2[i].nombre
  // } que tiene precio de $${ofertas2[i].precio} y se encuentra en color ${
  //   ofertas2[i].color
  // }
  // `);
}

/*
  Crear una función repetir que tome como argumento un valor "valor" y un número entero "cantidad", y devuelva una array con valor repetido cantidad de veces.

  repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
  repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
  repetir('html', 0) // []
*/

//                  parametros
const repetir = (valor, cantidad) => {
  const palabrasRepetidas = [];

  for (let i = 1; i <= cantidad; i++) {
    palabrasRepetidas.push(valor);
  }

  console.log(palabrasRepetidas);
};

//ejecución de función
repetir("fideos", 5); // ejecución 1
repetir("lalala", 6);

//funcion declarada => contiene la lógica
const comer = (comida) => {
  console.log("Hola estoy comiendo " + comida);
};

//invocación => ejecutar y preveerle a la función datos
comer("pollo");
comer("fideos");

/*
  Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

  crearCuentaRegresiva(3) // [3, 2, 1, 0]
  crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]
*/

const crearCuentaRegresiva = (numeroInicial, numeroFinal) => {
  const cuentaAtras = []; // [] array {} objeto

  //      inicio       |    condición == true  | decremento o incrmento
  for (let i = numeroInicial; i >= numeroFinal; i--) {
    cuentaAtras.push(i);
  }

  console.log(cuentaAtras);
};

crearCuentaRegresiva(5, 0);
