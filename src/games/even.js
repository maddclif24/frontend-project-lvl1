import playGame from '../engine.js';
import getRandomNum from '../randomNumber.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const min = 1;
  const max = 100;
  const question = getRandomNum(min, max);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const launchEvenGame = () => {
  playGame(description, getQuestionAndAnswer);
};

export default launchEvenGame;
