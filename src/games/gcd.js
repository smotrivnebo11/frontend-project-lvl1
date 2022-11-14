import brainGames from '../index.js';
import getRandomInteger from '../utils';

const description = "Find the greatest common divisor of given numbers";

const getDevisor = (num1, num2) => {
    if (num2 > num1) return findDevisor(num2, num1);
      if (!num2) return num1;
      return findDevisor(num2, num1 % num2);
};

const gcdGame = () => {
    const number1 = getRandomInteger(50);
    const number2 = getRandomInteger(50);
    const correctAnswer = getDevisor(number1, number2).toString();

    const gameQuestion = `Question: ${number1} ${number2}`;
    return [gameQuestion, correctAnswer];
};

export default () => {
    brainGames(description, gcdGame);
};