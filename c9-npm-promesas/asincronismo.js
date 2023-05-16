// promesas en javascript / node

console.log(String("hola"));

// código asincronico => callbacks: función que se ejecuta luego de que pasa algo
const nuevaPromesa = new Promise((resolve, reject) => {
  if (3 < 4) {
    resolve("Resuelto");
  } else {
    reject("No resuelto");
  }
});

console.log(nuevaPromesa);
