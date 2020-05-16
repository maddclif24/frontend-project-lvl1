import startGame from '../engine.js';
import randomNumber from '../randomNumber.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const high = 100;
  const low = 0;
  const genRandomNum = randomNumber(low, high);
  const question = genRandomNum;
  const answer = isPrime(genRandomNum) ? 'yes' : 'no';

  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchPrimeGame = () => {
  startGame(description, primeGame);
};

export default launchPrimeGame;
