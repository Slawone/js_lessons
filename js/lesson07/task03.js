const randomParityArr = (num, m, n, parity) => {
  if (parity === 'even') {
    return new Array(num).fill().map(item => item = getRandomNumber(m, n)).filter(item => item % 2 === 0);
  
  }

  if (parity === 'odd') {
    return new Array(num).fill().map(item => item = getRandomNumber(m, n)).filter(item => item % 2 === 1);
  }
};

console.log(randomParityArr(10, 5, 10, 'odd'));