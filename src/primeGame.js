import game from './engine.js';
import randomNumber from './randomNumber.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeAnswer = (number) => {
  if (isPrime(number) === true) {
    return 'yes';
  }
  return 'no';
};

const primeGame = () => {
  const high = 100;
  const low = 0;
  const genRandomNum = randomNumber(low, high);
  const question = genRandomNum;
  const answer = primeAnswer(genRandomNum);

  return [question, answer];
};

const launchPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(rules, primeGame);
};

export default launchPrimeGame;
