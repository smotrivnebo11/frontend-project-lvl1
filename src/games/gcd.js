import brainGames from '../index.js';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const findDevisor = (num1, num2) => {
    if (num2 > num1) return findDevisor(num2, num1);
      if (!num2) return num1;
      return findDevisor(num2, num1 % num2);
};

const gameRule = "Find the greatest common divisor of given numbers";

const gcdGame = () => {
    const number1 = getRandomInt(50);
    const number2 = getRandomInt(50);
    const result = findDevisor(number1, number2);
    const correctAnswer = result.toString();

    const gameQuestion = `Question: ${number1} ${number2}`;
    return [gameQuestion, correctAnswer];
};

export default () => {
    brainGames(gameRule, gcdGame);
};