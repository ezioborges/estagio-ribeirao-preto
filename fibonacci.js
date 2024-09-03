function isFibonacci(num) {
    if (num < 0) return false;
  
    let a = 0;
    let b = 1;
  
    while (a < num) { // supor que o num = 2
      const nextValue = a + b; // primeira chamada: 0 + 1; segunda chamada: 1 + 1 
      a = b; // primeira chamada: a(0) = b(1); segunda chamada: a(1) = b(1)  
      b = nextValue; // primeira chamada: b(1) = nextValue(0 + 1 = 1);
    }                // segunda chamada: b(1) = nextValue(1 + 1 = 2) ---> sai do laço
  
    if (a === num || b === num) { //verifica se 'a' ou 'b' são iguais ao valor de 'num'
      return true; // se o retorno for true o número faz parte dos números de Fibonnaci
    } else {
      return false; // se o retorno for false o o número nãop faz parte da sequencia de Fibonnacci.
    }
  }
  
  console.log(isFibonacci(2));
  console.log(isFibonacci(12));