import readlineSync from 'readline-sync';

const whatsYourName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const randomNumber = () => Math.floor(Math.random(1) * 100);

const mathSigns = ['+', '-', '*'];

const genMathSign = () => Math.floor(Math.random(1) * 3);

const randomMathSign = () => mathSigns[genMathSign()];

const trueAnswer = (questionForCalc) => {
  const test = questionForCalc.split(' ');
  let actualResult = 0;
  if (questionForCalc.includes('+') === true) {
    actualResult = Number(test[0]) + Number(test[2]);
  }
  if (questionForCalc.includes('-') === true) {
    actualResult = Number(test[0]) - Number(test[2]);
  }
  if (questionForCalc.includes('*') === true) {
    actualResult = Number(test[0]) * Number(test[2]);
  }
  return actualResult;
};

const questionForNumber = (questionForCalc) => {
  console.log(`Question: ${questionForCalc}`);
  return readlineSync.question('Your answer: ');
};

const calcGame = (name, result, questionForCalc) => {
  for (let correctAnswer = 0; correctAnswer < 3; questionForCalc = `${randomNumber()}${' '}${randomMathSign()}${' '}${randomNumber()}`) {
    const playerAnswer = questionForNumber(questionForCalc);
    result = trueAnswer(questionForCalc);
    if (Number(playerAnswer) === result) {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (Number(playerAnswer) !== result) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}`);
      correctAnswer = 0;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

const game = () => {
  const genRandomNum = randomNumber();
  console.log('Welcome to the Brain Games!');
  const name = whatsYourName();
  console.log('What is the result of the expression?');
  const questionForCalc = `${randomNumber()}${' '}${randomMathSign()}${' '}${randomNumber()}`;
  const result = trueAnswer(questionForCalc);
  calcGame(name, result, questionForCalc);
  return genRandomNum;
};
export default game;
