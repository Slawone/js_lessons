const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {
  const numberOfChecks = arr.length;
  let allSum = 0;

  for (const elem of arr) {
    allSum += elem;
  }
  
  const averageValue = Math.floor(allSum / numberOfChecks);

  return averageValue;
};

console.log(`Средний чек за день ${getAverageValue(allCashbox)} рублей.`);