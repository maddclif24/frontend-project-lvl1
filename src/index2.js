import readlineSync from 'readline-sync';

const whatsYourName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const randomNumber = () => Math.floor(Math.random() * 100);

const genArr = (questionForGcd) => {
  const arr = questionForGcd.split(' ');
  arr[0] = Number(arr[0]);
  arr[1] = Number(arr[1]);
  return arr;
};

const gcd = (genQuestion) => {
  const m = genQuestion[0];
  const n = genQuestion[1];
  let i = m;
  while (m % i !== 0 || n % i !== 0) {
    i -= 1;
  }
  return i;
};

const questionForNumber = (questionForGcd) => {
  console.log(`Question: ${questionForGcd}`);
  return readlineSync.question('Your answer: ');
};

const gcdGame = (name) => {
  let questionForGcd = `${randomNumber()}${' '}${randomNumber()}`;
  let genQuestion = genArr(questionForGcd);
  for (let correctAnswer = 0; correctAnswer < 3; questionForGcd = `${randomNumber()}${' '}${randomNumber()}`) {
    const playerAnswer = Number(questionForNumber(questionForGcd));
    genQuestion = genArr(questionForGcd);
    if (playerAnswer === gcd(genQuestion)) {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (playerAnswer !== gcd(genQuestion)) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${gcd(genQuestion)}`);
      correctAnswer = 0;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = whatsYourName();
  console.log('Find the greatest common divisor of given numbers.');
  gcdGame(name);
};
export default game;
