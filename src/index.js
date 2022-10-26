import readlineSync from 'readline-sync';
import gameRule from '../src/games/calc.js';
//import { evenGame, gameRule, userAnswer, correctAnswer } from '../src/games/even.js';

const brainGames = (gameRule, foo) => {
    // 1. приветствие 
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    // 2. правило игры
    console.log(gameRule);

    for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = foo();
    // 3. вопрос
    console.log(question);
    // 4. ответ пользователя
    const userAnswer = readlineSync.question("Your answer: ");
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

export default brainGames;