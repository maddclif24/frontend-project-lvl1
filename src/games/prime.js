import playGame from '../engine.js';
import getRandomNum from '../randomNumber.js';

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

const getQuestionAndAnswer = () => {
  const min = 0;
  const max = 100;
  const question = getRandomNum(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchPrimeGame = () => {
  playGame(description, getQuestionAndAnswer);
};

export default launchPrimeGame;
