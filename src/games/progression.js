import playGame from '../engine.js';
import getRandomNum from '../randomNumber.js';

const getProgressionTerm = (number, step, i) => ((number + i) * step);

const getQuestionAndAnswer = () => {
  let question = '';
  const minStep = 1;
  const maxStep = 10;
  const min = 0;
  const max = 100;
  const startingNumber = getRandomNum(min, max);
  const step = getRandomNum(minStep, maxStep);
  const hiddenElementIndex = getRandomNum(minStep, maxStep);
  const arithmeticProgressionTermsCount = 10;
  let answer;
  for (let i = 0; i <= arithmeticProgressionTermsCount; i += 1) {
    if (i === hiddenElementIndex) {
      answer = getProgressionTerm(startingNumber, step, i);
      question = `${question} ..`;
    } else question = `${question} ${(getProgressionTerm(startingNumber, step, i))}`;
  }
  if (question[0] === ' ') {
    question = question.trim();
  }
  return [question, String(answer)];
};

const description = 'What number is missing in the progression?';

const launchProgressionGame = () => {
  playGame(description, getQuestionAndAnswer);
};

export default launchProgressionGame;
