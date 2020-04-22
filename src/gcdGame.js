import game from './engine.js';
import randomNumber from './randomNumber.js';

const genArr = (questionForGcd) => {
  const arr = questionForGcd.split(' ');
  arr[0] = Number(arr[0]);
  arr[1] = Number(arr[1]);
  return arr;
};

const gcd = (m, n) => {
  let i = m;
  while (m % i !== 0 || n % i !== 0) {
    i -= 1;
  }
  return i;
};

const gcdGame = () => {
  const high = 100;
  const low = 0;
  const questionForGcd = `${randomNumber(low, high)} ${randomNumber(low, high)}`;

  const genQuestion = genArr(questionForGcd);
  const m = genQuestion[0];
  const n = genQuestion[1];
  const question = questionForGcd;
  const answer = String(gcd(m, n));

  return [question, answer];
};

const launchGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  game(rules, gcdGame);
};

export default launchGcdGame;
