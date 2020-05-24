import playGame from '../engine.js';
import getRandomNum from '../randomNumber.js';

const getProgressionTerm = (number, step, i) => (number + (i - 1) * step);

const getQuestionAndAnswer = () => {
  let question = '';
  const minStep = 1;
  const maxStep = 10;
  const min = 0;
  const max = 100;
  const randomNumber = getRandomNum(min, max);
  const step = getRandomNum(minStep, maxStep);
  const arithmeticProgressionTermsCount = 10;
  let answer;
  for (let i = 1; i <= arithmeticProgressionTermsCount; i += 1) {
    if (i === step) {
      answer = getProgressionTerm(randomNumber, step, i);
      question = `${question} ..`;
    } else question = `${question} ${(getProgressionTerm(randomNumber, step, i))}`;
  }
  if (question[0] === ' ') {
    question = question.substring(1);
  }
  return [question, String(answer)];
};

const description = 'What number is missing in the progression?';

const launchProgressionGame = () => {
  playGame(description, getQuestionAndAnswer);
};

export default launchProgressionGame;
