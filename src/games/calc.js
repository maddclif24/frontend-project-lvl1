import playGame from '../engine.js';
import getRandomNum from '../randomNumber.js';

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

const getQuestionAndAnswer = () => {
  const mathSigns = ['+', '-', '*'];
  const min = 0;
  const max = 100;
  const lowestIdx = 0;
  const signCount = mathSigns.length - 1;

  const getMathSign = () => mathSigns[getRandomNum(lowestIdx, signCount)];
  const mathSign = getMathSign();
  const firstNumber = getRandomNum(min, max);
  const secondNumber = getRandomNum(min, max);

  const question = `${firstNumber} ${mathSign} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, mathSign));

  return [question, answer];
};

const description = 'What is the result of the expression?';

const launchCalcGame = () => {
  playGame(description, getQuestionAndAnswer);
};

export default launchCalcGame;
