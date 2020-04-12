import readlineSync from 'readline-sync';

const whatsYourName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const randomNumber = () => Math.floor(Math.random() * 100);

const randomStep = () => Math.floor(Math.random() * 9) + 1;

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

const questionForNumber = (genReplacment) => {
  console.log(`Question: ${genReplacment}`);
  return readlineSync.question('Your answer: ');
};

const progressionGame = (name, genReplacment, genTrueAnswer) => {
  for (let correctAnswer = 0; correctAnswer < 3; genReplacment = replacement()) {
    const playerAnswer = questionForNumber(genReplacment);
    genTrueAnswer = answerForProg(genReplacment);
    if (Number(playerAnswer) === genTrueAnswer) {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (Number(playerAnswer) !== genTrueAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${genTrueAnswer}`);
      console.log(`Let's try again, ${name}`);
      correctAnswer = 0;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

const game = () => {
  const genReplacment = replacement();
  const genTrueAnswer = answerForProg(genReplacment);
  console.log('Welcome to the Brain Games!');
  const name = whatsYourName();
  console.log('What number is missing in the progression?');
  progressionGame(name, genReplacment, genTrueAnswer);
};
export default game;
