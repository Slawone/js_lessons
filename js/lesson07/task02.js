const getRandomNumber = (m, n) => Math.round(Math.min(m, n) + (Math.random() * (Math.max(m, n) - Math.min(m, n))));

const randomArr1 = (num, m, n) => {
  return new Array(num).fill().map(item => item = getRandomNumber(m, n));
};

console.log(randomArr1(10, 5, 10));