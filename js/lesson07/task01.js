const randomArr = (num) => {
  const arr = new Array(num);

  for (let i = 0; i < arr.length; i += 1) {
    arr.fill(undefined)
  }

  const newArr = arr.map(elem => {
    return elem = Math.ceil(Math.random() * 100);
  })

  return newArr;
};

console.log(randomArr(10));