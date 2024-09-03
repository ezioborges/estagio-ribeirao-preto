import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

function Sum() {
  const [result, setResult] = useState<number>(0);

  const sum = () => {
    const INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }

    return setResult(SOMA);
  };

  useEffect(() => {
    sum();
  }, []);

  return (
    <>
      <Title>Exercício de soma</Title>
      <Subtitle>O resultado do desafio é: </Subtitle>
      <h4>{result}</h4>
    </>
  );
}

export default Sum;
