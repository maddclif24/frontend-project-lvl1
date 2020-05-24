import playGame from '../engine.js';
import getRandomNum from '../randomNumber.js';

const gcd = (m, n) => {
  let i = m;
  while (m % i !== 0 || n % i !== 0) {
    i -= 1;
  }
  return i;
};

const getQuestionAndAnswer = () => {
  const min = 0;
  const max = 100;
  const firstNumber = getRandomNum(min, max);
  const secondNumber = getRandomNum(min, max);
  const question = `${firstNumber} ${secondNumber}`;

  const answer = String(gcd(firstNumber, secondNumber));

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const launchGcdGame = () => {
  playGame(description, getQuestionAndAnswer);
};

export default launchGcdGame;
