const randomArr = (num) => {
  // const arr = new Array(num);

  // const newArr = arr.fill().map(elem => {
  //   return elem = Math.ceil(Math.random() * 100);
  // })

  // return newArr;

  return new Array(num).fill().map(elem => elem = Math.ceil(Math.random() * 100));
};

console.log(randomArr(10));