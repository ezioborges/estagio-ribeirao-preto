function letterCount(word) {
  const arrayLetters = [];
  const wordArray = word.split("");

  wordArray.forEach((letter) => {
    if (letter === "a") {
      arrayLetters.push(letter);
    }
  });

  return arrayLetters.length;
}

console.log(letterCount("amanda"));
