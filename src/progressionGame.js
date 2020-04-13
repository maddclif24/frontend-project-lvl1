const randomNumber = () => {
  const limit = 100;
  return Math.floor(Math.random() * limit);
};

const randomStep = () => {
  const limit = 9;
  const shift = 1;
  return Math.floor(Math.random() * limit) + shift;
};

const arProgression = () => {
  let voidString = '';
  const number = randomNumber();
  const step = randomStep();
  for (let i = 1; i < 11; i += 1) {
    voidString += `${(number + (i - 1) * step)}${' '}`;
  }
  return voidString;
};

const replacement = () => {
  let result = '';
  const progression = arProgression().split(' ');
  const index = randomStep();
  progression[index] = '..';
  for (let i = 0; i < progression.length - 1; i += 1) {
    result += `${progression[i]}${' '}`;
  }
  return result;
};

const answerForProg = (genReplacment) => {
  let place = 0;
  const arrReplacment = genReplacment.split(' ');
  let factor = arrReplacment[1] - arrReplacment[0];
  for (let i = 0; i < arrReplacment.length; i += 1) {
    if (arrReplacment[i] === '..') {
      place = i;
      break;
    }
  }
  if (place <= arrReplacment.length / 2) {
    factor = arrReplacment[arrReplacment.length - 2] - arrReplacment[arrReplacment.length - 3];
  }
  return Number(arrReplacment[0]) + place * factor;
};

export const progressionGame = () => {
  const genReplacment = replacement();

  return [genReplacment, answerForProg(genReplacment)];
};

export const rules = 'What number is missing in the progression?';
