const getRandomTo100 = () => {
  return Math.ceil(Math.random() * 100);
};

const randomArr = (num) => {
  return new Array(num).fill().map(getRandomTo100);
};

console.log(randomArr(10));