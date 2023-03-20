'use strict';

const numbers = [3, 4, 6, 11, 1, 7];

const getArr = (arr) => {
  const randomNum = Math.ceil(Math.random() * 10);
  arr.push(randomNum);
  const sum = arr.reduce((acc, item) => acc += item);

  if (sum < 50) {
    getArr(arr);
  }

  return arr;
};

console.log(getArr(numbers));
