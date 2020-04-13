import readlineSync from 'readline-sync';

const whatsYourName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const questionForNumber = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const startGame = (name, nameGame) => {
  let genQuestionAnswer = nameGame();
  let question = genQuestionAnswer[0];
  let answer = genQuestionAnswer[1];
  const victory = 3;
  for (let correctAnswer = 0; correctAnswer < victory; genQuestionAnswer = nameGame()) {
    const playerAnswer = questionForNumber(question);
    question = genQuestionAnswer[0];
    answer = genQuestionAnswer[1];
    if (playerAnswer === answer) {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (playerAnswer !== answer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      correctAnswer = 0;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

const game = (rules, nameGame) => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const name = whatsYourName();
  console.log(rules);
  startGame(name, nameGame);
};

export default game;
