import brainGames from '../index.js';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

const gameRule = "Answer \"yes\" if the number is even, otherwise answer \"no\".";

const evenGame = () => {

    const number = getRandomInt(100);
    const gameQuestion = `Question: ${number}`;
    let correctAnswer = '';
   
   if (number % 2 === 0) {
    correctAnswer = 'yes';
   } else {
    correctAnswer = 'no';
   }

    return [gameQuestion, correctAnswer];
};

export default () => {
    brainGames(gameRule, evenGame);
};