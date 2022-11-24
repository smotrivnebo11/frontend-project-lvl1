import brainGames from '../index.js';

import getRandomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getAnswerAndQuestion = () => {
  const gameQuestion = getRandomInteger(1, 100);
  let correctAnswer = '';

  if (isEven(gameQuestion) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [gameQuestion, correctAnswer];
};

export default () => {
  brainGames(description, getAnswerAndQuestion);
};
