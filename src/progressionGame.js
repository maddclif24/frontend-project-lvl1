import game from './engine.js';
import randomNumber from './randomNumber.js';

const randomStep = () => {
  const lower = 1;
  const height = 10;
  return randomNumber(lower, height);
};

const arProgression = () => {
  let voidString = '';
  const high = 100;
  const low = 0;
  const number = randomNumber(low, high);
  const step = randomStep();
  let trueAnswer;
  for (let i = 1; i < 11; i += 1) {
    if (i === step) {
      trueAnswer = number + (i - 1) * step;
      voidString += '.. ';
    } else voidString += `${(number + (i - 1) * step)} `;
  }
  return [voidString, trueAnswer];
};

const progressionGame = () => {
  const questionAndAnswer = arProgression();
  const question = String(questionAndAnswer[0]);
  const answer = String(questionAndAnswer[1]);

  return [question, answer];
};

const launchProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  game(rules, progressionGame);
};

export default launchProgressionGame;
