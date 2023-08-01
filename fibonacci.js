function fibonacciIterativo(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
  }
}

// Ejemplo de uso:
const n = 10;
const resultado = fibonacciIterativo(n);
console.log(resultado); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

