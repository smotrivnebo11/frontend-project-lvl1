import brainGames from '../index.js';

const getRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const gameRule = 'Answer \"yes\" if given number is prime. Otherwise answer \"no\".';
  
const primeGame = () => {
  const number = getRandomInteger(1, 20);
  const gameQuestion = `Question: ${number}`;

  let prime = true;
  let correctAnswer = '';
  
  let i = 2;
    while (i <= Math.sqrt(number)) {
      if (number % i == 0) {
        prime = false
        break;
      }
      i += 1;
    }
      
    if (prime) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    return [gameQuestion, correctAnswer];
  };
  
export default () => {
  brainGames(gameRule, primeGame);
};