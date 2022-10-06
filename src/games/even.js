import readlineSync from 'readline-sync';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

export const evenGame = (number) => {

    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

    for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log("Question: ", number);
    const userAnswer = readlineSync.question('Your answer: ');

    if (number % 2 === 0 && userAnswer === "yes" || number % 2 !== 0 && userAnswer === "no") {
        console.log("Correct!");
    } else {
        const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
        const errorMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was '${opposite}'.\nLet's try again, ${userName}!`;
        console.log(errorMessage);
        return errorMessage;
    }
    }
    console.log(`Congratulations, ${userName}!`);
};
