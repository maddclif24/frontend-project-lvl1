import game from '../engine.js';
import randomNumber from '../randomNumber.js';

const getTrueAnswer = (firstNumber, secondNumber, mathSign) => {
  let result;
  switch (mathSign) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      return NaN;
  }
  return result;
};

const calcGame = () => {
  const mathSigns = ['+', '-', '*'];
  const high = 100;
  const low = 0;
  const signCount = mathSigns.length;

  const getMathSign = () => mathSigns[randomNumber(low, signCount)];
  const mathSign = getMathSign();
  const firstNumber = randomNumber(low, high);
  const secondNumber = randomNumber(low, high);

  const question = `${firstNumber} ${mathSign} ${secondNumber}`;
  const answer = String(getTrueAnswer(firstNumber, secondNumber, mathSign));

  return [question, answer];
};

const rules = 'What is the result of the expression?';

const launchCalcGame = () => {
  game(rules, calcGame);
};

export default launchCalcGame;
