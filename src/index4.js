import readlineSync from 'readline-sync';

const whatsYourName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const randomNumber = () => Math.floor(Math.random() * 100);

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionForNumber = (genRandomNum) => {
  console.log(`Question: ${genRandomNum}`);
  return readlineSync.question('Your answer: ');
};

const evenGame = (name) => {
  let genRandomNum = randomNumber();
  for (let correctAnswer = 0; correctAnswer < 3; genRandomNum = randomNumber()) {
    const playerAnswer = questionForNumber(genRandomNum);
    if (playerAnswer === isPrime(genRandomNum)) {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (playerAnswer !== isPrime(genRandomNum)) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${isPrime(genRandomNum)}`);
      correctAnswer = 0;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = whatsYourName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  evenGame(name);
};
export default game;
