import readlineSync from 'readline-sync';
import { calcGame, gameRule, userAnswer, correctAnswer} from '../src/games/calc.js';
import { calcGame, gameRule, userAnswer, correctAnswer} from '../src/games/even.js';

export const brainGames = (gameRule, gameQuestion, userAnswer, correctAnswer) => {
    // 1. приветствие 
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    // 2. правило игры
    console.log(gameRule);

    for (let i = 0; i < 3; i += 1) {
    // 3. вопрос
    console.log(gameQuestion);
    // 4. ответ пользователя
    console.log(userAnswer);
    // 5. проверка ответа пользователя и вывод сообщения о результате проверки
    if (userAnswer === correctAnswer) {
        console.log("Correct!");
    } else {
        const errorMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
        console.log(errorMessage);
        return errorMessage;
    }
    }

    // 6. поздравление
    console.log(`Congratulations, ${userName}!`);
};