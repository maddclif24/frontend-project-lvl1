const randomNumber = () => {
  const limit = 100;
  return Math.floor(Math.random() * limit);
};

const isEvenNumber = (genRandomNum) => {
  if (genRandomNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const evenGame = () => {
  const genRandomNum = randomNumber();

  return [genRandomNum, isEvenNumber(genRandomNum)];
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
