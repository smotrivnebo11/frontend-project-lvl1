import brainGames from '../index.js';

import getRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';

const createProgression = (start, step) => {
  const progression = [];
  const length = getRandomInteger(5, 10);
    for (let i = start, j = 0; j < length; i += step, j +=1) {
      progression.push(i);
    }

  return progression;
};

const getAnswerAndQuestion = () => {
  const start = getRandomInteger(1, 10);
  const step = getRandomInteger(1, 5);
  const progression = createProgression(start, step);
  const randomIndex = getRandomInteger(0, progression.length - 1);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const gameQuestion = `Question: ${progression.join(' ')}`;

  return [gameQuestion, correctAnswer];
};

export default () => {
  brainGames(description, getAnswerAndQuestion);
};
