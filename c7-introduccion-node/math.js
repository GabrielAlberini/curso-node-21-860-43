//           parametros
const sumar = (n1, n2) => {
  return n1 + n2;
};

const restar = (n1, n2) => {
  return n1 - n2;
};

const multiplicar = (n1, n2) => {
  return n1 * n2;
};

const dividir = (n1, n2) => {
  if (n1 === 0 || n2 === 0) {
    return "No puedes dividir por 0";
  } else {
    return n1 / n2;
  }
};

// math.sumar = sumar;
// math.restar = restar;
// math.multiplicar = multiplicar;
// math.dividir = dividir;

// module.exports = math;

module.exports = { sumar, restar, multiplicar, dividir };
