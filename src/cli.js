import readlineSync from 'readline-sync';

export const greetUser = (userName) => {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};