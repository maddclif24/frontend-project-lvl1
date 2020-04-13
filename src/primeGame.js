const randomNumber = () => {
  const limit = 100;
  return Math.floor(Math.random() * limit);
};

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

export const primeGame = () => {
  const genRandomNum = randomNumber();

  return [genRandomNum, isPrime(genRandomNum)];
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
