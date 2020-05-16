import startGame from '../engine.js';
import randomNumber from '../randomNumber.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const high = 100;
  const low = 0;
  const question = randomNumber(low, high);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const launchEvenGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default launchEvenGame;
