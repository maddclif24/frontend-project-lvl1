const randomNumber = () => {
  const limit = 100;
  return Math.floor(Math.random() * limit);
};

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

export const gcdGame = () => {
  const questionForGcd = `${randomNumber()}${' '}${randomNumber()}`;

  const genQuestion = genArr(questionForGcd);

  return [questionForGcd, String(gcd(genQuestion))];
};

export const rules = 'Find the greatest common divisor of given numbers.';
