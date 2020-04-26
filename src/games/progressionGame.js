import game from '../engine.js';
import randomNumber from '../randomNumber.js';

const getRandomStep = () => {
  const lower = 1;
  const height = 10;
  return randomNumber(lower, height);
};

const getProgression = () => {
  let voidString = '';
  const high = 100;
  const low = 0;
  const number = randomNumber(low, high);
  const step = getRandomStep();
  let trueAnswer;
  for (let i = 1, limitForStep = 11; i < limitForStep; i += 1) {
    if (i === step) {
      trueAnswer = number + (i - 1) * step;
      voidString += '.. ';
    } else voidString += `${(number + (i - 1) * step)} `;
  }
  return [voidString, trueAnswer];
};

const progressionGame = () => {
  const questionAndAnswer = getProgression();
  const question = String(questionAndAnswer[0]);
  const answer = String(questionAndAnswer[1]);

  return [question, answer];
};

const rules = 'What number is missing in the progression?';

const launchProgressionGame = () => {
  game(rules, progressionGame);
};

export default launchProgressionGame;
