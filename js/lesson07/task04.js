const getLeapYear = (startYear, finishYear) => {
  const minNum = Math.min(startYear, finishYear);
  const maxNum = Math.max(startYear, finishYear);
  
  const arr = new Array(maxNum - minNum + 1);

  const newArr = arr.fill().map((_, i) => minNum + i).filter(elem => elem % 4 === 0).join(', ')

  return `Високосные года - ${newArr}`;
};

console.log(getLeapYear(1956, 2000));