/* const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}; */

const getRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};

export default getRandomInteger;