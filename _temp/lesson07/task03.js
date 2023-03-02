const randomParityArr = (num, m, n, parity) => {
  const arr = new Array(num).fill().map(() => getRandomNumber(m, n));

  if (parity === 'even') {
    return arr.filter(item => item % 2 === 0);  
  }

  if (parity === 'odd') {
    return arr.filter(item => item % 2 === 1);
  }
};

console.log(randomParityArr(10, 5, 10, 'even'));