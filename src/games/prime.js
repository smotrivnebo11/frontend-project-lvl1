import brainGames from '../index.js';
import getRandomInteger from '../utils';

const description = 'Answer \"yes\" if given number is prime. Otherwise answer \"no\".';

const isPrime = (number) => {
  let prime = true;

  let i = 2;
  while (i <= Math.sqrt(number)) {
    if (number % i == 0) {
      prime = false
      break;
    }
    i += 1;
  }
}
  
const primeGame = () => {
  const number = getRandomInteger(1, 20);
  const gameQuestion = `Question: ${number}`;

  let correctAnswer = '';

  if (isPrime(number) === true) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  return [gameQuestion, correctAnswer];
  };
  
export default () => {
  brainGames(description, primeGame);
};