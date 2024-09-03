import { useState } from "react";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

function LetterAFrenquency() {
  const [letterAmount, setLetterAmount] = useState<string | number>("");
  const [word, setWord] = useState("");

  const handleClick = () => {
    const lowerCaseLetter = word.toLowerCase();
    const wordArr = lowerCaseLetter.split("");
    const letterArr: string[] = [];

    wordArr.forEach((letter) => {
      if (letter === "a") {
        letterArr.push(letter);
      }
    });

    const convertToNumber = Number(letterArr.length);
    setLetterAmount(convertToNumber);
    setWord("");
  };
  return (
    <>
      <Title>
        Questão 2: Quantidade de vezes a Letra "A" repete em uma palavra
      </Title>
      <div>
        <Subtitle>Por favor insira uma Palavra</Subtitle>
        <input
          type="text"
          value={word}
          onChange={({ target }) => setWord(target.value)}
        />
        <button onClick={handleClick}>Ocorrencias</button>
        <p>{letterAmount}</p>
      </div>
    </>
  );
}

export default LetterAFrenquency;
