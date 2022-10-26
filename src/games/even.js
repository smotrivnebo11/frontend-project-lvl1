import readlineSync from 'readline-sync';
import {brainGames} from '../src/games/index.js';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

export const evenGame = (number) => {

    // было приветствие 

    gameRule = "Answer \"yes\" if the number is even, otherwise answer \"no\".";

    for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    const gameQuestion = `Question: ${number}`;
    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = 0;

    if (number % 2 === 0 && userAnswer === "yes" || number % 2 !== 0 && userAnswer === "no") {
        correctAnswer = number;
    } else {
        const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
        correctAnswer = opposite;
    }
    }
    // было поздравление
};

export { evenGame, gameRule, gameQuestion, userAnswer, correctAnswer };