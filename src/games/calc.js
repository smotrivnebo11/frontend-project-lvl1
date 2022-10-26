import readlineSync from 'readline-sync';
import brainGames from '../index.js';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

const operations = ["+", "-", "*"];

const getRandomOperation = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
};

const calculate = (number1, number2, operation) => {
    let result = 0;

    switch (operation) {
        case "+": 
           result = number1 + number2; 
           break;
        case "-":
            result = number1 - number2; 
            break;
        case "*":
            result = number1 * number2; 
            break;
        default:
            result = null;
    }
    return result;
    };

    const gameRule = "What is the result of the expression?";

const calcGame = () => {
    // было приветствие 

    // был цикл
    const number1 = getRandomInt(50);
    const number2 = getRandomInt(50);
    const operation = getRandomOperation(operations);
    const expressionResult = calculate(number1, number2, operation);
    const correctAnswer = expressionResult.toString();

    const gameQuestion = `Question: ${number1} ${operation} ${number2}`;

    // была проверка ответа пользователя и вывод сообщения о результате проверки
    // было поздравление

    return [gameQuestion, correctAnswer];
};

export default () => {
    brainGames(gameRule, calcGame);
}