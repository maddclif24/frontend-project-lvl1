const randomNumber = () => {
  const limit = 100;
  return Math.floor(Math.random() * limit);
};

const genMathSign = () => {
  const limit = 3;
  return Math.floor(Math.random() * limit);
};

const trueAnswer = (questionForCalc) => {
  const test = questionForCalc.split(' ');
  let actualResult = 0;
  if (questionForCalc.includes('+') === true) {
    actualResult = Number(test[0]) + Number(test[2]);
  }
  if (questionForCalc.includes('-') === true) {
    actualResult = Number(test[0]) - Number(test[2]);
  }
  if (questionForCalc.includes('*') === true) {
    actualResult = Number(test[0]) * Number(test[2]);
  }
  return actualResult;
};

export const calcGame = () => {
  const mathSigns = ['+', '-', '*'];

  const randomMathSign = () => mathSigns[genMathSign()];

  const questionForCalc = `${randomNumber()}${' '}${randomMathSign()}${' '}${randomNumber()}`;

  return [questionForCalc, trueAnswer(questionForCalc)];
};

export const rules = 'What is the result of the expression?';
