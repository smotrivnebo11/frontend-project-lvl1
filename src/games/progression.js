import brainGames from '../index.js';

const getRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};
  
const createProgression = (start, step) => {
    const progression = [];
    const length = getRandomInteger(5, 10);
    for (let i = start, j = 0; j < length; i += step, j +=1) {
      progression.push(i);
    }
  
    return progression;
};
  
const gameRule = "What number is missing in the progression?";

const progressionGame = () => {
    const start = getRandomInteger(1, 10);
    const step = getRandomInteger(1, 5);
    const progression = createProgression(start, step);
    const randomIndex = getRandomInteger(0, progression.length - 1);

    const correctAnswer = String(progression[randomIndex]);
    const interruptedProgr = progression.splice(randomIndex, 1, '..');
    const gameQuestion = progression;
    
    return [gameQuestion, correctAnswer];
};

export default () => {
    brainGames(gameRule, progressionGame);
};