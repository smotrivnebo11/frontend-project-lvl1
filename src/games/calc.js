import readlineSync from 'readline-sync';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

const operations = ["+", "-", "*"];

const getRandomOperation = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
};

const calculate = (number1, number2, operation) => {
    let result = 0;

    switch (operation) {
        case "+": 
           result = number1 + number2; 
           break;
        case "-":
            result = number1 - number2; 
            break;
        case "*":
            result = number1 * number2; 
            break;
        default:
            result = null;
    }
    return result;
    };


export const calcGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log("What is the result of the expression?");

    for (let i = 0; i < 3; i += 1) {
        const number1 = getRandomInt(50);
        const number2 = getRandomInt(50);
        const operation = getRandomOperation(operations);
        const expressionResult = calculate(number1, number2, operation);

        console.log("Question: ", number1, operation, number2);
        const userAnswer = readlineSync.question("Your answer: ");

        console.log(typeof number1);
        console.log(typeof number2);
        console.log(typeof expressionResult);
        console.log(typeof userAnswer);

        if (userAnswer === expressionResult.toString()) {
            console.log("Correct!");
        } else {
            const errorMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${expressionResult}'.\nLet's try again, ${userName}!`;
            console.log(errorMessage);
            return errorMessage;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};