// función -> acción
// caminar - hablar - bostezar - limpiar

//limpiar -> caminar -> agarrar -> fregar
//dormir -> no necesitaría de otra función

//sintaxis
//forma tradicional (nombrada)
function tradicional() {}

//arrow function -> función flecha (moderna)
const arrowFuncion = () => {};

// las funciones son fragmentos de código reutilizables

//             parámetros
const saludar = (nombre) => {
  console.log("Hola " + nombre);
};

//invocar función
// saludar("Gabriel");
// saludar("Eugenia");

const comer = (comida) => {
  console.log("Estoy comiendo " + comida);
};

//invocar función
// comer("pollo");
// comer("fideos");

//declarar función es lo mismo a CREAR una función (manual de uso)
const sumar = (num1, num2) => {
  console.log(num1 + num2);
};

//ejecutando función
// sumar(1, 2);
