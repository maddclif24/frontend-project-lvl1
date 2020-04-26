import game from '../engine.js';
import randomNumber from '../randomNumber.js';

const isEvenNumber = (number) => number % 2 === 0;

const evenGame = () => {
  const high = 100;
  const low = 0;
  const number = randomNumber(low, high);
  const question = number;
  const answer = isEvenNumber(number) ? 'yes' : 'no';

  return [question, answer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const launchEvenGame = () => {
  game(rules, evenGame);
};

export default launchEvenGame;
