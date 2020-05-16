import readlineSync from 'readline-sync';

const questionForNumber = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const game = (name, nameGame) => {
  let genQuestionAnswer = nameGame();
  const victory = 3;
  for (let correctAnswer = 0; correctAnswer < victory; genQuestionAnswer = nameGame()) {
    const [question, answer] = genQuestionAnswer;
    const playerAnswer = questionForNumber(question);
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

const startGame = (description, nameGame) => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  game(playerName, nameGame);
};

export default startGame;
