import game from '../engine.js';
import randomNumber from '../randomNumber.js';

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
  const firstNumber = randomNumber(low, high);
  const secondNumber = randomNumber(low, high);
  const question = `${firstNumber} ${secondNumber}`;

  const answer = String(gcd(firstNumber, secondNumber));

  return [question, answer];
};

const rules = 'Find the greatest common divisor of given numbers.';

const launchGcdGame = () => {
  game(rules, gcdGame);
};

export default launchGcdGame;
