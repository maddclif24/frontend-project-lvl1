import startGame from '../engine.js';
import randomNumber from '../randomNumber.js';

const calculate = (firstNumber, secondNumber, mathSign) => {
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
  const lowestIdx = 0;
  const signCount = mathSigns.length;

  const getMathSign = () => mathSigns[randomNumber(lowestIdx, signCount)];
  const mathSign = getMathSign();
  const firstNumber = randomNumber(low, high);
  const secondNumber = randomNumber(low, high);

  const question = `${firstNumber} ${mathSign} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, mathSign));

  return [question, answer];
};

const description = 'What is the result of the expression?';

const launchCalcGame = () => {
  startGame(description, calcGame);
};

export default launchCalcGame;
