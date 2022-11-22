import brainGames from '../index.js';

import getRandomInteger from '../utils.js';


const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getRandomOperation = (arr) => arr[Math.floor(Math.random() * arr.length)];

const calculate = (number1, number2, operation) => {
  let result = 0;

  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = null;
  }
  return result;
};

const getAnswerAndQuestion = () => {
  const number1 = getRandomInteger(1, 50);
  const number2 = getRandomInteger(1, 50);
  const operation = getRandomOperation(operations);
  const expressionResult = calculate(number1, number2, operation);
  const correctAnswer = expressionResult.toString();

  const gameQuestion = `Question: ${number1} ${operation} ${number2}`;

  return [gameQuestion, correctAnswer];
};

export default () => {
  brainGames(description, getAnswerAndQuestion);
};
