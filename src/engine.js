import readlineSync from 'readline-sync';

const playQuiz = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const playRound = (playerName, getQuestionAndAnswer) => {
  const roundsCount = 3;
  for (let correctAnswerCount = 0; correctAnswerCount < roundsCount; correctAnswerCount += 1) {
    const [question, answer] = getQuestionAndAnswer();
    const playerAnswer = playQuiz(question);
    if (playerAnswer !== answer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulation, ${playerName}!`);
};

const playGame = (description, questionAndAnswer) => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  playRound(playerName, questionAndAnswer);
};

export default playGame;
