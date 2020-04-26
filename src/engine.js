import readlineSync from 'readline-sync';

const questionForNumber = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const startGame = (name, nameGame) => {
  let genQuestionAnswer = nameGame();
  let question;
  let answer;
  const victory = 3;
  for (let correctAnswer = 0; correctAnswer < victory; genQuestionAnswer = nameGame()) {
    [question, answer] = [genQuestionAnswer[0], genQuestionAnswer[1]];
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

const game = (rules, nameGame) => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(rules);
  startGame(playerName, nameGame);
};

export default game;
