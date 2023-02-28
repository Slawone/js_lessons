const getLeapYear = (startYear, finishYear) => {
  const arr = new Array(Math.max(startYear, finishYear) - Math.min(startYear, finishYear) + 1);

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = startYear + i;
  };

  const newArr = arr.map(item => item).filter(elem => elem % 4 === 0).join(', ')

  return `Високосные года - ${newArr}`;
};

console.log(getLeapYear(1956, 2000));