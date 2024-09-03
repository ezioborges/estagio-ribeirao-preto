function sum() {
  const INDICE = 12;
  let SOMA = 0;
  let K = 1;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  return SOMA;
}

console.log(sum());
