const colores = ["rojo", "azul"];

//métodos en array

//agregar al final
colores.push("amarillo");
colores.push("violeta");
colores.push("lila", "negro");

//eliminar el último
colores.pop();

//agregar al principio
colores.unshift("blanco", "naranja");

//eliminar el primero
colores.shift();

colores[4] = "bordo";

// console.log(colores);

//Crear una función obtenerMenor que tome como parametro un array de números y devuelva el menor de ellos.

const numeros = [4, 7, 2, 5, 9, 1, 3, 0];

const obtenerMayor = (array) => {
  //paso 1: array original
  console.log(array);
  //paso 2: array ordenada
  console.log(array.sort());
  //paso 3: extracción de último número
  console.log(array.pop());
};

//invocación de función
obtenerMayor(numeros);
