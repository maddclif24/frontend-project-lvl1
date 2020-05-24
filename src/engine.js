import readlineSync from 'readline-sync';

const getQuiz = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const startQuiz = (playerName, getQuestionAndAnswer) => {
  const endGame = 3;
  let correctAnswerCount = 0;
  while (correctAnswerCount < endGame) {
    const [question, answer] = getQuestionAndAnswer();
    const playerAnswer = getQuiz(question);
    if (playerAnswer === answer) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      correctAnswerCount = 0;
    }
  }
  console.log(`Congratulation, ${playerName}!`);
};

const playGame = (description, questionAndAnswer) => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  startQuiz(playerName, questionAndAnswer);
};

export default playGame;
