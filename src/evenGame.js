import game from './engine.js';
import randomNumber from './randomNumber.js';

const isEvenNumber = (number) => number % 2 === 0;

const evenAnswer = (number) => {
  if (isEvenNumber(number) === true) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const high = 100;
  const low = 0;
  const number = randomNumber(low, high);
  const question = number;
  const answer = evenAnswer(number);

  return [question, answer];
};

const launchEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  game(rules, evenGame);
};

export default launchEvenGame;
