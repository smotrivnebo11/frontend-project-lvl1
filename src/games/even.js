import brainGames from '../index.js';
import getRandomInteger from '../utils';

const description = "Answer \"yes\" if the number is even, otherwise answer \"no\".";

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

const evenGame = () => {

    const number = getRandomInteger(100);
    const gameQuestion = `Question: ${number}`;
    let correctAnswer = '';
   
   if (isEven(number) === true) {
    correctAnswer = 'yes';
   } else {
    correctAnswer = 'no';
   }

    return [gameQuestion, correctAnswer];
};

export default () => {
    brainGames(description, evenGame);
};