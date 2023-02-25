const allCashBox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = arr => {
  let allChecksSum = 0;
  const numberOfChecks = arr.length;

  for (const elem of arr) {
    const [count, sum] = elem;
    allChecksSum += Math.floor(sum / count);
  }

  let averageCost = allChecksSum / numberOfChecks;

  return averageCost;
};

console.log(`Средняя стоимость одного товара в магазине ${getAveragePriceGoods(allCashBox)} рублей.`);