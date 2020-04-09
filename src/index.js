import readlineSync from 'readline-sync';

const whatsYourName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const randomNumber = () => Math.floor(Math.random(1) * 100);

const isEvenNumber = (genRandomNum) => {
  if (genRandomNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionForNumber = (genRandomNum) => {
  console.log(`Question: ${genRandomNum}`);
  return readlineSync.question('Your answer: ');
};

const evenGame = (name) => {
  let actualRandomNum = randomNumber();
  for (let correctAnswer = 0; correctAnswer < 3; actualRandomNum = randomNumber()) {
    const playerAnswer = questionForNumber(actualRandomNum);
    if (playerAnswer === isEvenNumber(actualRandomNum)) {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (playerAnswer !== isEvenNumber(actualRandomNum)) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${isEvenNumber(actualRandomNum)}`);
      correctAnswer = 0;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

const game = () => {
  const genRandomNum = randomNumber();
  console.log('Welcome to the Brain Games!');
  const name = whatsYourName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  evenGame(name);
  return genRandomNum;
};
export default game;
