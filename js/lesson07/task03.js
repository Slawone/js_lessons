const randomParityArr = (num, m, n, parity) => {
  const arr = new Array(num);

  for (let i = 0; i < arr.length; i += 1) {
    arr.fill(undefined);
  };

  const newArr = arr.map(item => {
    return item = Math.round(Math.min(m, n) + (Math.random() * (Math.max(m, n) - Math.min(m, n))));
  })

  if (parity === 'even') {
    return newArr.filter(item => item % 2 === 0);
  
  }
  if (parity === 'odd') {
    return newArr.filter(item => item % 2 === 1);
  }  

  return newArr;
};

console.log(randomParityArr(10, 5, 10, 'odd'));