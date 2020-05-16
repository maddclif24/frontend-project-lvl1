import startGame from '../engine.js';
import randomNumber from '../randomNumber.js';

const getProgression = (number, step, i) => (number + (i - 1) * step);

const getQuestionAndAnswer = () => {
  let question = '';
  const minStep = 1;
  const maxStep = 10;
  const high = 100;
  const low = 0;
  const number = randomNumber(low, high);
  const step = randomNumber(minStep, maxStep);
  const arithmeticProgressionTermsCount = 10;
  let answer;
  for (let i = 1; i <= arithmeticProgressionTermsCount; i += 1) {
    if (i === step) {
      answer = getProgression(number, step, i);
      question = `${question} ..`;
    } else question = `${question} ${(getProgression(number, step, i))}`;
  }
  return [String(question), String(answer)];
};

const description = 'What number is missing in the progression?';

const launchProgressionGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default launchProgressionGame;
