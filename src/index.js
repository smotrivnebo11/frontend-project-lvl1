import readlineSync from 'readline-sync';

const countRounds = 3;

const brainGames = (description, getAnswerAndQuestion) => {
  // 1. приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // 2. правило игры
  console.log(description);

  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = getAnswerAndQuestion();

    // 3. вопрос
    console.log(`Question: ${question}`);

    // 4. ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // 5. проверка ответа пользователя и вывод сообщения о результате проверки
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      const errorMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(errorMessage);
      return errorMessage;
    }
  }

  // 6. поздравление
  return console.log(`Congratulations, ${userName}!`);
};

export default brainGames;
