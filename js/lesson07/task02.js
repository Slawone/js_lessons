const randomArr1 = (num, m, n) => {
  const arr = new Array(num);

  for (let i = 0; i < arr.length; i += 1) {
    arr.fill(undefined)
  }

  const newArr = arr.map(item => {
    return elem = Math.round(Math.min(m, n) + (Math.random() * (Math.max(m, n) - Math.min(m, n))))
  }) 

  return newArr;
};

console.log(randomArr1(10, 5, 10));