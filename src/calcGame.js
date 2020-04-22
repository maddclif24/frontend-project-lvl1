import game from './engine.js';
import randomNumber from './randomNumber.js';

const trueAnswer = (questionForCalc) => {
  const test = questionForCalc.split(' ');
  let result;
  switch (test[1]) {
    case '+':
      result = Number(test[0]) + Number(test[2]);
      break;
    case '-':
      result = Number(test[0]) - Number(test[2]);
      break;
    case '*':
      result = Number(test[0]) * Number(test[2]);
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

  const randomMathSign = () => mathSigns[randomNumber(low, signCount)];

  const questionForCalc = `${randomNumber(low, high)} ${randomMathSign()} ${randomNumber(low, high)}`;
  const question = questionForCalc;
  const answer = String(trueAnswer(questionForCalc));

  return [question, answer];
};

const launchCalcGame = () => {
  const rules = 'What is the result of the expression?';
  game(rules, calcGame);
};

export default launchCalcGame;
